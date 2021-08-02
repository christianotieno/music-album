import axios from 'axios';
import { getAlbums } from './index';
import { albumsFeed } from '../helpers/apiEndpoints';

const fetchAlbums = () => (dispatch) => {
  axios.get(albumsFeed).then((results) => {
    dispatch(getAlbums(results.data.feed.entry));
  });
};

export default fetchAlbums;
