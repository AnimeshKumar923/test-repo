import Photo from './Photo';

function Gallery({ photos, onDelete }) {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Gallery;
