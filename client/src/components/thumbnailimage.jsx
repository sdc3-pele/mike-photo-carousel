import React from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 1%;
  align-self: flex-start;
`;

const ThumbNailImages = styled.img`
  height: auto;
  width: 100px;
  opacity: 0.3;
  padding: 10px;
`;

const Selected = styled.img`
  height: auto;
  width: 100px;
  margin: auto;
  opacity: 1;
`;




const ThumbnailImage = ({ image, setCurrentPhoto, currentPhoto }) => {
  let images = JSON.parse(image.url);
  console.log(images)
  images = images.map((urlId) => {
    return `https://sdc3-pele.s3-us-west-1.amazonaws.com/photo${urlId}.jpeg`
  });
  return (
    <ThumbnailContainer>
      {images.map((url) => {
        const thumbnailPic = React.createRef();

        function handleClick() {
          const mainPic = document.getElementById(`${thumbnailPic.current.src}`);
          mainPic.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
        if (currentPhoto === url) {
          return (
            <Selected
              src={url}
              ref={thumbnailPic}
              onClick={() => {
                handleClick();
                setCurrentPhoto(thumbnailPic.current.src);
              }}
            />
          );
        }
        return (
          <ThumbNailImages
            src={url}
            ref={thumbnailPic}
            onClick={() => {
              handleClick();
              setCurrentPhoto(thumbnailPic.current.src);
            }}
          />
        );
      })}
    </ThumbnailContainer>
  );
};


export default ThumbnailImage;
