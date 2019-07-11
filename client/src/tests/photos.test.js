import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Photos from '../components/photos.jsx';

const wrapper = shallow(<Photos />);

// describe('Render photos', function() {
//   it('should render without throwing an error', function() {
//     expect(wrapper.contains(<h1>test</h1>)).toBe(true));
//   });
// });

describe('Render photos', () => {
  it('should render without throwing an error', () => {
    expect(wrapper.find('.photos').exists()).toBe(true);
  });
});
