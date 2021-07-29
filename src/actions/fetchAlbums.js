import axios from 'axios';
import getAlbums from './index';
import albumFeeds from '../helpers/apiEndpoints';

const fetchAlbums = () => (dispatch) => {
  axios.get(albumFeeds).then((results) => {
    // console.log(results.data.feed.entry);
    dispatch(getAlbums(results.data.feed.entry));
  });
};

export default fetchAlbums;
