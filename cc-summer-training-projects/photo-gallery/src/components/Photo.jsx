// src/components/Photo.jsx
import React from 'react';

const Photo = ({ id, src, alt, deletePhoto }) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className="w-100px h-100px object-cover rounded shadow cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      />
      <button
        onClick={() => deletePhoto(id)}
        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
      >
        &times;
      </button>
      
    </div>
  );
};

export default Photo;
