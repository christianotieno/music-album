const GET_ALBUMS = 'GET_ALBUMS';
const GET_TRACKS = 'GET_TRACKS';

const getAlbums = (albums) => ({
  type: GET_ALBUMS,
  payload: albums,
});

const getTracks = (tracks) => ({
  type: GET_TRACKS,
  payload: tracks,
});

export { getAlbums, getTracks };
