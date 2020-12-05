import React from 'react';

const ButtonsNumbers = (props) =>  {
        return (
            <input
                className={props.className}
                type="button"
                value={props.label}
                onClick={props.handleClick}
            />
        );
}

export default ButtonsNumbers;