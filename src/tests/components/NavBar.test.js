import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../components/NavBar';

const setup = () => shallow(<NavBar />);

describe('Navbar component to render', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Navbar component should render correctly', () => {
    const element = component.find('.navbar');
    expect(element.length).toEqual(1);
  });
});
