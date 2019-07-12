import React from 'react';

const Image = ({ image, myClass }) => {
  const images = JSON.parse(image.photo_urls);
  // console.log(Array.isArray(image))
  return (
    <div>
      {images.map(url => <img className={myClass} src={url}></img>)}
    </div>
  );
};


export default Image;
