const GET_ALBUMS = 'GET_ALBUMS';
const GET_ALBUM = 'GET_ALBUM';

const getAlbums = (albums) => ({
  type: GET_ALBUMS,
  payload: albums,
});

const getAlbum = (album) => ({
  type: GET_ALBUM,
  payload: album,
});

export { getAlbums, getAlbum };
