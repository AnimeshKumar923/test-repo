function Photo({ photo, onDelete }) {
  return (
    <div className="photo">
      <img src={photo.url} alt="uploaded" />
      <button onClick={() => onDelete(photo.id)}>Delete</button>
    </div>
  );
}

export default Photo;
