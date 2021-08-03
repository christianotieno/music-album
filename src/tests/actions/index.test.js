import {
  getAlbums, getTracks, clearAlbum, changeFilter, trackNotFound,
} from '../../actions/index';

import { albums, tracks } from '../helpers/helper';

describe('Get albums', () => {
  it('Should return an object containing the action and payload with the albums', () => {
    const response = getAlbums(albums);

    expect(response.type).toEqual('GET_ALBUMS');
    expect(response.payload).toEqual(albums);
  });
});

describe('Get tracks', () => {
  it('Should return an object containing the action amd payload with the tracks for the album', () => {
    const response = getTracks(tracks);

    expect(response.type).toEqual('GET_TRACKS');
    expect(response.payload).toEqual(tracks);
  });
});

describe('Clear Album', () => {
  it('Should return an object containing the action', () => {
    const response = clearAlbum();

    expect(response.type).toEqual('CLEAR_ALBUM');
  });
});

describe('Change Filter', () => {
  it('Should return an object containing the action and payload with the filter', () => {
    const response = changeFilter('Action');

    expect(response.type).toEqual('CHANGE_FILTER');
    expect(response.payload).toEqual('Action');
  });
});

describe('Tracks Not Found', () => {
  it('Should return an object containing the action', () => {
    const response = trackNotFound();

    expect(response.type).toEqual('TRACK_NOT_FOUND');
  });
});
