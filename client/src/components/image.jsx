import React from 'react';

const Image = (props) => {
  const image = JSON.parse(props.image.photo_urls);
  // console.log(Array.isArray(image))
  return (
    <div>
      {image.map(url => <img src={url}></img>)}
    </div>
  );
};


export default Image;
