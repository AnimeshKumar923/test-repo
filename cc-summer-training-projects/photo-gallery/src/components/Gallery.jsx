// src/components/Gallery.jsx
import React from 'react';
import Photo from './Photo';

const Gallery = ({ photos, deletePhoto }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <Photo key={photo.id} {...photo} deletePhoto={deletePhoto} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
