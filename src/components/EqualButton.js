import React from 'react';

const EqualButton = (props) => {
  return (
    <input
      className={props.className}
      type="button"
      value={props.label}
      onClick={() => props.equalHandleClick()}
    />
  );
};

export default EqualButton;
