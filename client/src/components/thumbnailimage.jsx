import React from 'react';
import { Link } from 'react-scroll';

const ThumbnailImage = ({ image }) => {
  const images = JSON.parse(image.photo_urls);
  // console.log(Array.isArray(image))
  return (
    <div className="thumbnailContainer">
      {images.map((url) => {
        return (
          <div>
            <Link
              activeClass="active"
              to={url}
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
            >
              <img className="thumbnailImages" src={url}></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
};


export default ThumbnailImage;
