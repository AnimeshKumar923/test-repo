// src/App.jsx
import React, { useState } from 'react';
import Gallery from './components/Gallery';
import UploadForm from './components/UploadForm'

const App = () => {
  const [photos, setPhotos] = useState([
    
  ]);

  const addPhoto = (newPhoto) => {
    setPhotos([...photos, { id: Date.now(), src: newPhoto, alt: `Photo ${photos.length + 1}` }]);
  };

  const deletePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <div className="bg-gradient-to-t from-lime-400 to-blue-500 min-h-screen w-screen">
      <header className="bg-fuchsia-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">My Photo Gallery</h1>
      </header>
      <main className="p-4">
        <UploadForm addPhoto={addPhoto} />
        <Gallery photos={photos} deletePhoto={deletePhoto} />
      </main>
    </div>
  );
};

export default App;
