import React from 'react';

const ClearButton = (props) => {
  console.log('1212')
  return (
    <input
      className={props.className}
      type="button"
      value={props.label}
      onClick={() => props.handleClearValue()}
    />
  );
};

export default ClearButton;
