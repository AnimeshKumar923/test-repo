function Photo({ photo, onDelete }) {
  return (
    <div className="relative m-2">
      <img src={photo.url} alt="uploaded" className="w-full h-auto rounded shadow-md" />
      <button 
        onClick={() => onDelete(photo.id)} 
        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default Photo;
