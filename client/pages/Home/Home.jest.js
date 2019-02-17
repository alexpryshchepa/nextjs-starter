/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import { Home } from './Home';

describe('With Enzyme', () => {
  it('Checks title text and snapshot matching', () => {
    const component = shallow(<Home t={key => key} />);

    expect(
      component.find('h1').text(),
    ).toEqual('title');

    expect(component).toMatchSnapshot();
  });
});
