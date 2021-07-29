const GET_ALBUMS = 'GET_ALBUMS';

const getAlbums = (albums) => ({
  type: GET_ALBUMS,
  payload: albums,
});

export default { getAlbums };
