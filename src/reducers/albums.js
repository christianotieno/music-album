const GET_ALBUMS = 'GET_ALBUMS';
const GET_TRACKS = 'GET_TRACKS';
const CLEAR_ALBUM = 'CLEAR_ALBUM';
const TRACKS_NOT_FOUND = 'TRACKS_NOT_FOUND';
const ALBUMS_NOT_FOUND = 'ALBUMS_NOT_FOUND';

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
        albumsLoading: true,
        tracks: [...action.payload],
      };
    case CLEAR_ALBUM:
      return {
        ...state,
        tracksLoading: true,
        albums: null,
      };
    case ALBUMS_NOT_FOUND:
      return {
        ...state,
        albumsLoading: false,
        tracks: null,
      };

    case TRACKS_NOT_FOUND:
      return {
        ...state,
        tracksLoading: false,
        albums: null,
      };
    default: return state;
  }
};

export default albumReducer;
