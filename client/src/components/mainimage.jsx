import React from 'react';

const MainImage = ({ image }) => {
  const images = JSON.parse(image.photo_urls);
  return (
    <div className="mainContainer">
      {images.map(url => <img id={url} className="mainImages" src={url}></img>)}
    </div>
  );
};


export default MainImage;
