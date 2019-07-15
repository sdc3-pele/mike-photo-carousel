import React from 'react';
import MainImage from './mainimage.jsx';
import ThumbnailImage from './thumbnailimage.jsx';
// import ScrollView, { ScrollElement } from './scroll.jsx';

const fetch = require('node-fetch');

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPhoto: ''
    };
    // this.scrollTo = this.scrollTo.bind(this);
    this.setCurrentPhoto = this.setCurrentPhoto.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.substring(1);
    // console.log(id)
    fetch(`/api/${id}`)
      .then(res => res.json())
      .then((urls) => {
        this.setState({
          photos: urls,
        })
      })
      // .then(() => addObserver())
      .catch(() => console.log('failed to get URLs'));
  }

  setCurrentPhoto(url) {
    this.setState({
      currentPhoto: url,
    });
  }

  /*
  scrolling
  when a thumbnail photo is clicked, need to scroll to that associated main photo
  click thumbnail, set state to that src
  have a scroll to function that gets the DOM element with that src id and scroll to it
  */

      // function addObserver() {
      //   const myImgs = this.document.querySelectorAll('.test');
      //   console.log(myImgs);

      //   const observer = new IntersectionObserver((entries) => {
      //     entries.forEach((entry) => {
      //       if (entry.intersectionRatio > 0.8) {
      //         entry.target.classList.add('selected');
      //       } else {
      //         entry.target.classList.remove('selected');
      //       }
      //     });
      //   });

      //   myImgs.forEach((image) => {
      //     observer.observe(image);
      //   });
      // }
      // addObserver();

// set an observer on each main image and if it comes into view, set the currentphoto state to the main target's src
// when rendering the thumbnail photos, it references the state and if the url of the thumbail === this.state.currentphoto, change the css class to 'selected'

  render() {
    const photoArr = this.state.photos;
    return (
      <div className="photoContainer">
        {photoArr.map(image => <ThumbnailImage image={image} setCurrentPhoto={this.setCurrentPhoto} currentPhoto={this.state.currentPhoto} />)}
        {photoArr.map(image => <MainImage image={image} />)}
      </div>
    );
  }
}

export default Photos;
