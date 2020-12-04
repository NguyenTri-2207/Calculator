import React, { Component } from 'react';

class ButtonsNumbers extends Component {
    render() {
        const { className, label, handleClick } = this.props

        return (
            <input
                className={className}
                type="button"
                value={label}
                onClick={handleClick}
            />
        );
    }
}

export default ButtonsNumbers;