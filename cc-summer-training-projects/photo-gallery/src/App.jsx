import { useState, useEffect } from 'react';
import Upload from './components/Upload';
import Gallery from './components/Gallery';
import './styles.css'; // Import the CSS file

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/photos');
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('photo', file);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      const newPhoto = await response.json();
      setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/photos/${id}`, {
        method: 'DELETE',
      });
      setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Photo Gallery</h1>
      <Upload onUpload={handleUpload} />
      <Gallery photos={photos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
