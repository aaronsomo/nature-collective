import React from 'react';
import './SelectedTitles.scss';

const SelectedTitles = ({ selectedTitles, results }) => {
  return (
    <div className="selected-titles-container">
      <h2>Selected Images:</h2>
      {selectedTitles.length < 1 ? (
        <div className="selected-titles">None</div>
      ) : (
        selectedTitles.map((title, idx) => {
          return (
            <div className="selected-titles" key={idx}>
              {title.length > 0 ? title : 'untitled'}
            </div>
          );
        })
      )}
    </div>
  );
};

export default SelectedTitles;
