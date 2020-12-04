import React, { Component } from 'react';

class CalculatorTitle extends Component {
    render() {
        const { title } = this.props
        return (
            <div className="calculator-title">
                {title}
            </div>
        );
    }
}

export default CalculatorTitle;