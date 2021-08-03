import axios from 'axios';
import { getTracks, trackNotFound } from './index';
import Credentials from '../helpers/Credentials';
import {
  searchParams,
  baseSearchUrl,
  apiTokenEndpoint,
} from '../helpers/apiEndpoints';

const fetchTracks = (albumName) => (dispatch) => {
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
      const token = tokenResponse.data.access_token;
      const searchForAlbum = baseSearchUrl + albumName + searchParams;
      axios.get(searchForAlbum, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((results) => {
        dispatch(getTracks(results.data.tracks.items));
      }).catch((error) => {
        if (error.message === 'Request failed with status code 400') {
          dispatch(trackNotFound());
        }
      });
    })
    .catch((error) => {
      if (error.message === 'Request failed with status code 400') {
        dispatch(trackNotFound());
      }
    });
};

export default fetchTracks;
