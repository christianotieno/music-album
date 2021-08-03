import React from 'react';
import { shallow } from 'enzyme';
import AlbumItem from '../../components/AlbumItem';

const setup = (
  { album, history },
) => shallow(<AlbumItem.WrappedComponent
  album={album}
  history={history}
/>);

const album = {
  id: '15',
  title: 'album title',
  releaseDate: '2020-08-08',
  image: 'album-image-url',
  categoryName: 'album-category',
  categoryId: '1234',
  price: '9.99',
  currency: 'USD',

};

describe('Album Item component', () => {
  let component;

  beforeEach(() => {
    component = setup({
      album,
      history: {},
    });
  });

  it('Album Item component should render', () => {
    const element = component.find('.album-item');
    expect(element.length).toEqual(1);

    const img = component.find('.album-item-img');
    expect(img.props().src).toEqual(album.image);

    const textBody = component.find('.album-item-body');
    const h3 = textBody.childAt(0);
    const p = textBody.childAt(1);
    expect(h3.text()).toEqual(album.title);
    expect(p.text()).toEqual(`Date released: ${album.releaseDate}`);

    const genres = component.find('.genre');
    const genreItems = genres.children('.album-item-genre');
    expect(genres.length).toEqual(1);
    expect(genreItems.length).toEqual(1);
  });
});
