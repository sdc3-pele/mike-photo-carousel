import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImages = styled.img`
  height: 600px;
  width: auto;
`;

class MainImage extends React.Component {
  componentDidMount() {
    const props1 = this.props;
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 1.0) {
          props1.setCurrentPhoto(entry.target.src);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0%',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);
    const mainPics = window.document.getElementsByClassName('mainImages');

    for (const picture of mainPics) {
      observer.observe(picture);
    }
  }

  render() {
    const { photo_urls } = this.props.image;

    return (
      <MainContainer>
        {JSON.parse(photo_urls).map(url => <div><MainImages className="mainImages" id={url} src={url} /></div>)}
      </MainContainer>
    );
  }
}

export default MainImage;
