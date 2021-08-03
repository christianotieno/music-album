import axios from 'axios';
import { getAlbums } from './index';
import filterAlbums from '../helpers/filterData';
import { albumsFeed } from '../helpers/apiEndpoints';

const fetchAlbums = () => (dispatch) => {
  axios.get(albumsFeed).then((results) => {
    const filtered = filterAlbums(results.data.feed.entry);
    dispatch(getAlbums(filtered));
  });
};

export default fetchAlbums;
