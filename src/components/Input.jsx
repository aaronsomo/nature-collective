import React, { useState } from 'react';
import './Input.scss';

const Input = (props) => {
  const [input, setInput] = useState('');

  const handleUserInput = (e) => {
    e.preventDefault();

    let { value } = e.currentTarget;
    if (value === '') {
      props.clearApp();
    }

    setInput(value);
  };

  const handleKeyPress = (e, input) => {
    if (e.key === 'Enter') {
      props.onSubmit(input);
    }
  };

  return (
    <>
      <input
        id="query-input"
        type="search"
        name="input"
        value={input}
        placeholder="Search for an image of nature"
        onChange={(e) => {
          handleUserInput(e);
        }}
        onKeyUp={(e) => {
          handleKeyPress(e, input);
        }}
      />
      <button
        className="query-btn"
        type="button"
        onClick={() => {
          props.onSubmit(input);
        }}
      >
        Search
      </button>
    </>
  );
};

export default Input;
