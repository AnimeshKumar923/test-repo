import React from 'react';

const Gallery = ({ photos, onDelete }) => {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={`http://localhost:5000/${photo.url}`} alt="Uploaded" />
          <button onClick={() => onDelete(photo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
