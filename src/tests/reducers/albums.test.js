import albumReducer from '../../reducers/albums';
import {
  getAlbums, getTracks, clearAlbum, tracksNotFound,
} from '../../actions';
import { albums, tracks } from '../helpers/helper';

const initialState = {
  albums: [],
  tracks: [],
  tracksLoading: true,
  albumsLoading: true,
};

describe('Albums Reducer', () => {
  it('Should return the default state', () => {
    const state = albumReducer(undefined, []);

    expect(state).toEqual(initialState);
  });

  it('Should return new state if valid albums are provided', () => {
    const action = getAlbums(albums);
    const state = albumReducer(undefined, action);

    expect(state.albums).toEqual([...albums]);
    expect(state.albumsLoading).toEqual(false);
  });

  it('Should return new state if valid albums are provided', () => {
    const action = getTracks(tracks);
    const state = albumReducer(undefined, action);

    expect(state.tracks).toEqual([...tracks]);
    expect(state.tracksLoading).toEqual(false);
    expect(state.albumsLoading).toEqual(true);
  });

  it('Should clear albums from state', () => {
    const action = clearAlbum();
    const state = albumReducer(undefined, action);

    expect(state.albumsLoading).toEqual(true);
    expect(state.tracksLoading).toEqual(true);
  });

  it('Should return a new state with tracks set to empty list', () => {
    const action = tracksNotFound();
    const state = albumReducer(undefined, action);

    expect(state.tracks).toEqual([]);
    expect(state.tracksLoading).toEqual(false);
  });
});
