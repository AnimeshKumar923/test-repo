// src/components/UploadForm.jsx
import React, { useState } from 'react';

const UploadForm = ({ addPhoto }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      addPhoto(file);
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button type="submit" className="bg-rose-400 text-white py-1 px-4 rounded">Upload</button>
    </form>
  );
};

export default UploadForm;
