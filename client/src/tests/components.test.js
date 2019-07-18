import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Photos from '../components/photos.jsx';
import MainImage from '../components/mainimage.jsx';
import ThumbnailImage from '../components/thumbnailimage.jsx';
// import mockData from './database/mockData.js';

configure({ adapter: new Adapter() });

// describe('Render photos', function() {
//   it('should render without throwing an error', function() {
//     expect(wrapper.contains(<MainImage />)).toBe(true);
//   });
// });

// const wrapper = mount(<Photos />);

describe('<Photos />', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Photos />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a photo container div', () => {
    const wrapper = mount(<Photos />);
    expect(wrapper.find('.photoContainer').exists()).toBe(true);
  })
  it('should have state', () => {
    const wrapper = mount(<Photos />)
    expect(wrapper.state()).toExist;
  });
});

// describe('<ThumbnailImage />', () => {
//   it('should render without errors', () => {
//     const wrapper = shallow(<ThumbnailImage />);
//     // const image.photo_urls =
//     expect(wrapper.find('.thumbnailContainer').exists()).toBe(true);
//   });
// });
//   it('should render without throwing an error', () => {
//     const wrapper1 = mount(<Photos />);
//     it('should render without errors', () => {
//       expect(wrapper.find('.thumbnailContainer').exists()).toBe(true);
//     });
    // wrapper1.setProps({images: [
    //   'https://feclululemonpics.s3.us-east-2.amazonaws.com/FEC/mat1.jpeg',
    //   'https://feclululemonpics.s3.us-east-2.amazonaws.com/FEC/mat2.jpeg',
    //   'https://feclululemonpics.s3.us-east-2.amazonaws.com/FEC/mat3.jpeg',
    // ]})
//     expect(wrapper1).toMatchSnapshot();
//   });
  // it('click should trigger function', () => {
  //   const component = shallow(<ThumbnailImage />)
  // })

  // it('should have the same number of components as <MainImage />', () => {
  //   const thumbnail = shallow(<ThumbnailImage />);
  //   const main = shallow(<MainImage />);
  //   expect(thumbnail.find())
  // })
// });

// describe('<MainImage />', () => {
//   const wrapper = shallow(<MainImage />);
//   it('should render without errors', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });
//   it('should render without throwing an error', () => {
//     const wrapper = shallow(<MainImage />)
//     wrapper.setProps({photo_urls: [
//       'https://feclululemonpics.s3.us-east-2.amazonaws.com/FEC/mat1.jpeg',
//       'https://feclululemonpics.s3.us-east-2.amazonaws.com/FEC/mat2.jpeg',
//       'https://feclululemonpics.s3.us-east-2.amazonaws.com/FEC/mat3.jpeg',
//     ]})
//       expect(wrapper.find('.mainContainer').exists()).toBe(true);
//   });
// })
// describe('Render photos', () => {
//   it('should render without throwing an error', () => {
//     expect(wrapper.find('.photos').exists()).toBe(true);
//   });
// });