const GET_ALBUMS = 'GET_ALBUMS';
const GET_TRACKS = 'GET_TRACKS';
const CLEAR_ALBUM = 'CLEAR_ALBUM';
const CHANGE_FILTER = 'CHANGE_FILTER';

const getAlbums = (albums) => ({
  type: GET_ALBUMS,
  payload: albums,
});

const getTracks = (tracks) => ({
  type: GET_TRACKS,
  payload: tracks,
});

const clearAlbum = () => ({
  type: CLEAR_ALBUM,
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export {
  getAlbums, getTracks, clearAlbum, changeFilter,
};
