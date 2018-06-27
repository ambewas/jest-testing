// full docs https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f

import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './Component';

describe('Component', function () {
  const wrapper = shallow(
    <MyComponent>Hello Jest!</MyComponent>
  );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should increase a counter in state', () => {
    wrapper.find('.toggle').simulate('click');
    expect(wrapper.state().counter).toEqual(1)
  })
})
