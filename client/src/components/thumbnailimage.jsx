import React from 'react';

const ThumbnailImage = ({ image, setCurrentPhoto, currentPhoto }) => {
  const images = JSON.parse(image.photo_urls);

  return (
    <div className="thumbnailContainer">
      {images.map((url) => {
        const text = React.createRef();
        function handleClick() {
          const mainPic = document.getElementById(`${text.current.src}`);
          mainPic.scrollIntoView({
            behavior: 'smooth',
          });
        }
        return (
          <div>
            <img className="thumbnailImages"
              src={url}
              ref={text}
              onClick={(e) => {
                handleClick(e);
                setCurrentPhoto(text.current.src)
              }}>
            </img>
          </div>
        );
      })}
    </div>
  );
};


export default ThumbnailImage;
