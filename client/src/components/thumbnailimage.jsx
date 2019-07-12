import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const ThumbnailImage = ({ image }) => {
  const images = JSON.parse(image.photo_urls);
  // console.log(Array.isArray(image))
  return (
    <div>
      <div>
        {images.map((url) => {
        return (
          <Link
          activeClass="active"
          to={url}
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
          >
          <img className="thumbnailImages" src={url}></img>
          </Link>)
        })}
      </div>
    </div>
  );
};


export default ThumbnailImage;
