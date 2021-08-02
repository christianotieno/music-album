import axios from 'axios';
import { getAlbum } from './index';
import Credentials from '../helpers/Credentials';
import {
  searchParams,
  baseSearchUrl,
  apiTokenEndpoint,
} from '../helpers/apiEndpoints';

const fetchAlbum = (albumName) => {
  const spotify = Credentials();
  const encodedData = Buffer.from(`${spotify.ClientID}:${spotify.ClientSecret}`).toString('base64');
  axios(apiTokenEndpoint, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${encodedData}`,
    },
    data: 'grant_type=client_credentials',
    method: 'POST',
  })
    .then((tokenResponse) => {
      const token = tokenResponse.data.data.access_token;
      const searchForAlbum = baseSearchUrl + albumName + searchParams;
      axios.get(searchForAlbum, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((results) => (dispatch) => {
        dispatch(getAlbum(results.data.albums.items));
      }).catch((error) => {
        console.log(error.message);
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default fetchAlbum;
