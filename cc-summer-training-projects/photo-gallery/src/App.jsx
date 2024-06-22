import { useState, useEffect } from 'react';
import Upload from './components/Upload';
import Gallery from './components/Gallery';
import './styles.css'; // Import the CSS file

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append('photo', file);

    fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((newPhoto) => setPhotos([...photos, newPhoto]));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/photos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setPhotos(photos.filter((photo) => photo.id !== id));
    });
  };

  return (
    <div className="app">
      <h1>Photo Gallery</h1>
      <Upload onUpload={handleUpload} />
      <Gallery photos={photos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
