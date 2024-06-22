import { useState } from 'react';

function Upload({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </form>
  );
}

export default Upload;
