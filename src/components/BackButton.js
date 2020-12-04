import React from 'react';

const BackButton = (props) => {
  return (
    <input
      className={props.className}
      type="button"
      value={props.label}
      onClick={() => props.handleBackButton()}
    />
  );
};

export default BackButton;
