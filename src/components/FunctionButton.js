import React from 'react';

const FunctionButton = (props) => {
  return (
    <input
      className={props.className}
      type="button"
      value={props.label}
      onClick={() => props.typeHandleClick(props.label)}
    />
  );
};

export default FunctionButton;
