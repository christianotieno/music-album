const GET_ALBUMS = 'GET_ALBUMS';
const GET_TRACKS = 'GET_TRACKS';
const CLEAR_ALBUM = 'CLEAR_ALBUM';
const CLEAR_TRACKS = 'CLEAR_TRACKS';

const initialState = {
  albums: [],
  tracks: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        albums: [...action.payload],
      };
    case GET_TRACKS:
      return {
        tracks: [...action.payload],
      };
    case CLEAR_ALBUM:
      return {
        ...state,
        albums: [],
      };
    case CLEAR_TRACKS:
      return {
        ...state,
        tracks: [],
      };
    default: return state;
  }
};

export default albumReducer;
