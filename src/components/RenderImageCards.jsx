import React from 'react';
import ImageCard from './ImageCard';

const RenderImageCards = ({ array, handleSelect }) => {
  return array.map((data, idx) => {
    return <ImageCard data={data} key={idx} handleSelect={handleSelect} />;
  });
};

export default RenderImageCards;
