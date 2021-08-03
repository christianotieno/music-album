import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

const setup = () => shallow(<App />);

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('App component should render correctly', () => {
    const element = component.find('.app');
    expect(element.length).toEqual(1);
  });
});
