import { combineReducers } from 'redux';
import albumReducer from './albums';
import filterReducer from './filter';

const reducer = () => combineReducers({
  albums: albumReducer,
  filter: filterReducer,
});

export default reducer;
