import { combineReducers } from 'redux';
import albumReducer from './albums';

const reducer = () => combineReducers({
  albums: albumReducer,
});

export default reducer;
