import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const MainImages = styled.img`
  height: 700px;
  width: auto;
`;

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRect.height === 700) {
          this.props.setCurrentPhoto(entry.target.src);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(callback, options);
  }

  componentDidMount() {
    const mainPics = window.document.getElementsByClassName('mainImages');
    for (const picture of mainPics) {
      this.observer.observe(picture);
    }
  }

  render() {
    const { url } = this.props.image;

    return (
      <MainContainer>
        {JSON.parse(url).map(urls => <MainImages className="mainImages" id={urls} src={`https://sdc3-pele.s3-us-west-1.amazonaws.com/photo${urls}.jpeg`} />)}
      </MainContainer>
    );
  }
}

export default MainImage;
