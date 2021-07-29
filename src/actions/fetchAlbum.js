import axios from 'axios';
import { getAlbums } from './index';
import { albumFeeds } from '../helpers/apiEndpoints';

const fetchAlbums = () => (dispatch) => {
  axios.get(albumFeeds).then((results) => {
    console.log(results);
  });
};

export default fetchAlbums;
