import React from 'react';
import './SelectedTitles.scss';

const SelectedTitles = ({ selectedTitles }) => {
  return (
    <div className="selected-titles-container">
      <h2>Selected Images:</h2>
      {selectedTitles.map((title, idx) => {
        return (
          <div className="selected-titles" key={idx}>
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default SelectedTitles;
