require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

const upload = multer({ dest: 'uploads/' });

console.log(`Connecting to MongoDB with URI: ${process.env.MONGO_URI}`);

MongoClient.connect(process.env.MONGO_URI)
  .then((client) => {
    const db = client.db('photoGallery');
    const photosCollection = db.collection('photos');

    app.get('/api/photos', async (req, res) => {
      const photos = await photosCollection.find().toArray();
      res.json(photos);
    });

    app.post('/api/upload', upload.single('photo'), (req, res) => {
      const newPhoto = {
        id: Date.now().toString(),
        url: `uploads/${req.file.filename}`,
      };

      photosCollection.insertOne(newPhoto, (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.json(newPhoto);
      });
    });

    app.delete('/api/photos/:id', async (req, res) => {
      const { id } = req.params;
      const photo = await photosCollection.findOne({ id });

      if (photo) {
        fs.unlinkSync(path.join(__dirname, photo.url));
        await photosCollection.deleteOne({ id });
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.error(error));
