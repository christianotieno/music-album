const GET_ALBUMS = 'GET_ALBUMS';
const GET_TRACKS = 'GET_TRACKS';
const CLEAR_ALBUM = 'CLEAR_ALBUM';
const CLEAR_TRACKS = 'CLEAR_TRACKS';

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

const clearTracks = () => ({
  type: CLEAR_TRACKS,
});

export {
  getAlbums, getTracks, clearAlbum, clearTracks,
};
