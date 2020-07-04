import React from 'react';
import ImageCard from './ImageCard';

const RenderImageCards = ({ array }) => {
  return array.map((data, idx) => {
    return <ImageCard data={data} key={idx} />;
  });
};

export default RenderImageCards;
