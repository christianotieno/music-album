import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from '../../containers/AlbumList';
import { albums } from '../helpers/helper';

const setup = ({
  albums, filter, fetchAlbums, clearAlbum, changeFilter,
}) => shallow(
  <AlbumList.WrappedComponent
    albums={albums}
    filter={filter}
    fetchAlbums={fetchAlbums}
    clearAlbum={clearAlbum}
    changeFilter={changeFilter}
  />,
);

describe('Album List container', () => {
  let container;

  beforeEach(() => {
    container = setup({
      albums: {
        albums,
      },
      filter: 'All',
      fetchAlbums: () => null,
      clearAlbum: () => null,
      changeFilter: () => null,
    });
  });

  it('Album List component should render correctly', () => {
    const element = container.find('.album-list');
    expect(element.length).toEqual(1);
  });
});
