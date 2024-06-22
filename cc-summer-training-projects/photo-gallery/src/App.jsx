import { useState, useEffect } from 'react';
import Upload from './components/Upload';
import Gallery from './components/Gallery';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append('photo', file);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((newPhoto) => setPhotos([...photos, newPhoto]));
  };

  const handleDelete = (id) => {
    fetch(`/api/photos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setPhotos(photos.filter((photo) => photo.id !== id));
    });
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-6 bg-green-500">Photo Gallery</h1>
      <Upload onUpload={handleUpload} />
      <Gallery photos={photos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
