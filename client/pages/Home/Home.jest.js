/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('With Enzyme', () => {
  it('Checks title text', () => {
    const component = shallow(<Home />);

    expect(
      component.find('h1[class^="Home-title"]').text(),
    ).toEqual('Welcome to NextJS starter');
  });
});

describe('With Snapshot Testing', () => {
  it('Matches with snapshot', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
