import React from 'react';

const DynamicButton = ({ text, onClick, param }) => {
  return (
    <button onClick={() => onClick(param)} className="btn-primary">
      {text}
    </button>
  );
};

export default DynamicButton;