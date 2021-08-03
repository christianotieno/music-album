const GET_ALBUMS = 'GET_ALBUMS';
const GET_TRACKS = 'GET_TRACKS';
const CLEAR_ALBUM = 'CLEAR_ALBUM';
const CHANGE_FILTER = 'CHANGE_FILTER';
const TRACKS_NOT_FOUND = 'TRACKS_NOT_FOUND';
const ALBUMS_NOT_FOUND = 'ALBUMS_NOT_FOUND';
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

const tracksNotFound = () => ({
  type: TRACKS_NOT_FOUND,
});

const albumsNotFound = () => ({
  type: ALBUMS_NOT_FOUND,
});
export {
  getAlbums, getTracks, clearAlbum, changeFilter, tracksNotFound, albumsNotFound,
};
