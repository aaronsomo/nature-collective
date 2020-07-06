import React from 'react';
import './ImageCard.scss';

const ImageCard = ({ data, key }) => {
  const { title, author, image, source } = data;
  const index = key;
  let thumbnailImg = image ? image : require('../assets/image_placeholder.jpg');
  let authorText = author ? author : 'No author found';

  return (
    <div
      className="image-card--container"
      value={index}
      onClick={() => console.log(index)}
    >
      <img className="image-card--img" alt="img" src={thumbnailImg} />
      <div className="image-card--info--container">
        <div className="image-card--info">
          <h2 className="image-card--title">{title}</h2>
          <h3 className="image-card--subtext">{`By: ${authorText}`}</h3>
        </div>
        <div className="image-card--btn">
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="image-card--link"
          >
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
