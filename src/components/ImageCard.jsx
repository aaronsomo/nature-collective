import React, { useState } from 'react';
import './ImageCard.scss';

const ImageCard = ({ data, handleSelect }) => {
  const [selected, setSelected] = useState(false);
  const { title, author, image, source } = data;
  let titleText = title.length > 0 ? title : 'untitled';
  let thumbnailImg = image ? image : require('../assets/image_placeholder.jpg');
  let authorText = author ? author : 'No author found';

  return (
    <div
      className={
        selected ? 'image-card--container-selected' : 'image-card--container'
      }
    >
      <img
        className="image-card--img"
        alt="img"
        src={thumbnailImg}
        onClick={() => {
          setSelected(!selected);
          handleSelect(title);
        }}
      />
      <div className="image-card--info--container">
        <div className="image-card--info">
          <h2 className="image-card--title">{titleText}</h2>
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
