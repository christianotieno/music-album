const genre = (albums) => {
  const arr = [];
  albums.map((album) => arr.push(album.category.attributes.term));
  return [...new Set(arr)];
};

export default genre;
