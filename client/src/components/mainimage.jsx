import React from 'react';
import { Link, animateScroll, Element } from 'react-scroll';


const MainImage = ({ image }) => {
  const images = JSON.parse(image.photo_urls);
  // console.log(Array.isArray(image))
  return (
    <div>
      {images.map(url => <img id={url} className="mainImages" src={url}></img>)}
    </div>
  );
};


export default MainImage;
