const GET_ALBUMS = 'GET_ALBUMS';
const GET_ALBUM = 'GET_ALBUM';

const initialState = {
  albums: [],
  album: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        albums: [...action.payload],
      };
    case GET_ALBUM:
      return {
        album: [...action.payload],
      };
    default: return state;
  }
};

export default albumReducer;
