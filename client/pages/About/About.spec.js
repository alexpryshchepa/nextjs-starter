import { shallow } from 'enzyme';
import React from 'react';
import { About } from './About';

describe('about page component user interface', () => {
  let component = shallow(
    <About
      t={key => key}
      docs={{
        isLoaded: false,
      }}
    />,
  );

  it('checks title text', () => {
    expect(
      component.find('.title').text(),
    ).toEqual('title');
  });

  it('checks link text', () => {
    expect(
      component.find('.link').text(),
    ).toEqual('link');
  });

  it('checks loader visibility', () => {
    expect(
      component.find('div.loader'),
    ).toHaveLength(1);
  });

  it('checks snapshot matching', () => {
    expect(component).toMatchSnapshot();
  });

  it('checks error message visibility', () => {
    component = shallow(
      <About
        t={key => key}
        docs={{
          hasError: true,
        }}
      />,
    );

    expect(
      component.find('span.error'),
    ).toHaveLength(1);
  });
});
