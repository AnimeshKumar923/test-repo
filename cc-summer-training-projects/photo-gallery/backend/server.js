const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const upload = multer({ dest: 'uploads/' });

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

app.get('/api/photos', async (req, res) => {
  const params = {
    TableName: 'Photos' // Replace with your DynamoDB table name
  };
  try {
    const data = await dynamodb.scan(params).promise();
    res.json(data.Items);
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

app.post('/api/upload', upload.single('photo'), async (req, res) => {
  const newPhoto = {
    id: Date.now().toString(),
    url: `uploads/${req.file.filename}`,
  };

  const params = {
    TableName: 'Photos',
    Item: newPhoto
  };

  try {
    await dynamodb.put(params).promise();
    res.json(newPhoto);
  } catch (error) {
    console.error('Error uploading photo:', error);
    res.status(500).json({ error: 'Failed to upload photo' });
  }
});

app.delete('/api/photos/:id', async (req, res) => {
  const { id } = req.params;
  const params = {
    TableName: 'Photos',
    Key: {
      id: id
    }
  };

  try {
    await dynamodb.delete(params).promise();
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting photo:', error);
    res.status(500).json({ error: 'Failed to delete photo' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
