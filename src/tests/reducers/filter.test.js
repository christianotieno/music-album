import filterReducer from '../../reducers/filter';
import { changeFilter } from '../../actions';

describe('Filter Reducer', () => {
  it('Should return the default state', () => {
    const state = filterReducer(undefined, {});

    expect(state).toEqual('All');
  });

  it('Should return new state if a valid filter is provided', () => {
    const action = changeFilter('Hard Rock');
    const state = filterReducer(undefined, action);

    expect(state).toEqual('Hard Rock');
  });
});
