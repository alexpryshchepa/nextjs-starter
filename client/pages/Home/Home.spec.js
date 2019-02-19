import { shallow } from 'enzyme';
import React from 'react';
import { Home } from './Home';

describe('home page component user interface', () => {
  const component = shallow(
    <Home
      t={key => key}
      currentLang="en"
    />,
  );

  it('checks title text', () => {
    expect(
      component.find('h1').text(),
    ).toEqual('title');
  });

  it('checks active language', () => {
    expect(
      component.find('.langActive').text(),
    ).toEqual('En');
  });

  it('checks snapshot matching', () => {
    expect(component).toMatchSnapshot();
  });
});
