const filterAlbums = (data) => {
  const result = [];
  data.map((album) => (
    result.push({
      id: album.id.attributes['im:id'],
      title: album.title.label,
      releaseDate: album['im:releaseDate'].attributes.label,
      image: album['im:image'][2].label,
      categoryName: album.category.attributes.term,
      categoryId: album.category.attributes['im:id'],
      price: album['im:price'].attributes.amount,
      currency: album['im:price'].attributes.currency,
    })
  ));

  return result;
};

export default filterAlbums;
