import React from 'react';
import MainImage from './mainimage.jsx';
import ThumbnailImage from './thumbnailimage.jsx';
import styled from 'styled-components';

const fetch = require('node-fetch');

const PhotoContainer = styled.div`
  display: flex;
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPhoto: '',
    };
    this.setCurrentPhoto = this.setCurrentPhoto.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.substring(1);
    fetch(`/api/${id}`)
      .then(res => res.json())
      .then((urls) => {
        this.setState({
          photos: urls,
        });
      })
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

  render() {
    const photoArr = this.state.photos;
    return (
      <PhotoContainer>
        {photoArr.map(image => <ThumbnailImage image={image} setCurrentPhoto={this.setCurrentPhoto} currentPhoto={this.state.currentPhoto} />)}
        {photoArr.map(image => <MainImage image={image} setCurrentPhoto={this.setCurrentPhoto} currentPhoto={this.state.currentPhoto} />)}
      </PhotoContainer>
    );
  }
}

export default Photos;
