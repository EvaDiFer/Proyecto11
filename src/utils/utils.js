export const getImageUrl = (path) => {
  if (!path) {
    return 'https://static.vecteezy.com/system/resources/previews/006/059/989/non_2x/crossed-camera-icon-avoid-taking-photos-image-is-not-available-illustration-free-vector.jpg'; // URL de una imagen de marcador de posición
  }
  return `https://image.tmdb.org/t/p/w500${path}`;
};
