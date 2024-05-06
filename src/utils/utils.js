export const getImageUrl = (path) => {
  if (!path) {
    return 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';
  }
  return `https://image.tmdb.org/t/p/w500${path}`;
};
