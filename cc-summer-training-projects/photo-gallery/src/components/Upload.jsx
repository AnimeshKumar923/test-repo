import React, { useState } from 'react';

const Upload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div class='upload'>
      <input type="file" onChange={handleFileChange} />
      <button class='upload-btn' onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
