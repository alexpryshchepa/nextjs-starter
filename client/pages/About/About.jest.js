/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import { About } from './About';

describe('With Enzyme', () => {
  it('Checks title text and snapshot matching', () => {
    const component = shallow(
      <About
        t={key => key}
        docs={{
          loaded: false,
          error: false,
          docs: null,
        }}
      />,
    );

    expect(
      component.find('h1').text(),
    ).toEqual('title');

    expect(
      component.find('div.loader'),
    ).toHaveLength(1);

    expect(component).toMatchSnapshot();
  });
});
