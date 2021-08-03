const GET_ALBUMS = 'GET_ALBUMS';
const GET_TRACKS = 'GET_TRACKS';
const CLEAR_ALBUM = 'CLEAR_ALBUM';
const ALBUM_NOT_FOUND = 'ALBUM_NOT_FOUND';
const ALBUMS_NOT_FOUND = 'ALBUM_NOT_FOUNDS';

const initialState = {
  albums: [],
  tracks: [],
  tracksLoading: true,
  albumsLoading: true,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albumsLoading: false,
        albums: [...action.payload],
      };
    case GET_TRACKS:
      return {
        ...state,
        tracksLoading: false,
        tracks: [...action.payload],
      };
    case CLEAR_ALBUM:
      return {
        ...state,
        albums: null,
      };
    case ALBUM_NOT_FOUND:
      return {
        ...state,
        tracksLoading: false,
        tracks: null,
      };

    case ALBUMS_NOT_FOUND:
      return {
        ...state,
        albumsLoading: false,
        albums: null,
      };
    default: return state;
  }
};

export default albumReducer;
