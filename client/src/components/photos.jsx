import React from 'react';
import styled from 'styled-components';
import MainImage from './mainimage.jsx';
import ThumbnailImage from './thumbnailimage.jsx';

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
    fetch(`/api/photos/${id}`)
      .then(res => res.json())
      .then((res) => {
        //console.log(res);
        this.setState({
          photos: res,
        });
      })
      .catch((err) => console.log(err));//altered
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
    // const photoArr = this.state.photos;
    const { photos, currentPhoto } = this.state;
    return (
      <PhotoContainer>
        {photos.map(image => (
          <ThumbnailImage
            image={image}
            setCurrentPhoto={this.setCurrentPhoto}
            currentPhoto={currentPhoto}
          />
        ))}
        {photos.map(image => (
          <MainImage
            image={image}
            setCurrentPhoto={this.setCurrentPhoto}
            currentPhoto={currentPhoto}
          />
        ))}
      </PhotoContainer>
    );
  }
}

export default Photos;
