document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');
  const gallery = document.getElementById('gallery');

  const fetchPhotos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/photos');
      const photos = await response.json();
      displayPhotos(photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const displayPhotos = (photos) => {
    gallery.innerHTML = '';
    photos.forEach((photo) => {
      const photoItem = document.createElement('div');
      photoItem.classList.add('photo-item');
      photoItem.innerHTML = `
        <img src="http://localhost:5000/${photo.url}" alt="Uploaded">
        <button onclick="deletePhoto('${photo.id}')">Delete</button>
      `;
      gallery.appendChild(photoItem);
    });
  };

  const uploadPhoto = async (file) => {
    const formData = new FormData();
    formData.append('photo', file);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      const newPhoto = await response.json();
      fetchPhotos(); // Refresh photos after upload
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  uploadBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
      uploadPhoto(file);
    }
  });

  window.deletePhoto = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/photos/${id}`, {
        method: 'DELETE',
      });
      fetchPhotos(); // Refresh photos after deletion
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  fetchPhotos(); // Initial fetch of photos
});
