import { shallow } from 'enzyme';
import React from 'react';
import { Loader } from './Loader';

describe('loader component', () => {
  const component = shallow(
    <Loader
      size={32}
      color="#f00"
    />,
  );

  it('renders loader', () => {
    expect(
      component.find('span.spinner').prop('style'),
    ).toEqual({
      width: '32px',
      height: '32px',
      borderColor: '#f00',
      borderRightColor: 'transparent',
    });
  });

  it('checks snapshot matching', () => {
    expect(component).toMatchSnapshot();
  });
});
