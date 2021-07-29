const GET_ALBUMS = 'GET_ALBUMS';

const initialState = {
  albums: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        albums: [...action.payload],
      };
    default: return state;
  }
};

export default albumReducer;
