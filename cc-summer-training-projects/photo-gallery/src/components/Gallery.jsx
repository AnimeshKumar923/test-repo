import Photo from './Photo';

function Gallery({ photos, onDelete }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Gallery;
