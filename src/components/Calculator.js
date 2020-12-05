import React from 'react';
import CalculatorTitle from './CalculatorTitle';
import ButtonsNumbers from './ButtonsNumbers';
import OutputScreen from './outputScreen';
import FunctionButton from './FunctionButton';
import EqualButton from './EqualButton';
import ClearButton from './ClearButton';
import BackButton from './BackButton';




class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            numberStore: '',
            type: '',
            result: ''
        }
    }

    handleClick = (event) => {
        const value = event.target.value;
        if ((!this.state.number.includes('.') || value !== '.') && this.state.number.length < 8) {
            this.setState({
                number: `${(this.state.number + value).replace(/^0+/, '')}`
            }
            )
        }
        console.log(value)
        if (this.state.number && this.state.type) {
            if ((!this.state.number.includes('.') || value !== '.') && this.state.number.length < 8) {
                this.setState({
                    ...this.state,
                    numberStore: `${(this.state.numberStore + value).replace(/^0+/, '')}`
                })
            }

        }
        console.log('type', this.state)

    }

    handleClearValue = () => {
        this.setState({
            number: '',
            numberStore: '',
            type: '',
            result: ''
        })
    }

    handleBackButton = () => {
        if (this.state.number !== '') {
            const deletedNumber = this.state.number.slice(0, this.state.number.length - 1);
            this.setState({
                number: deletedNumber,
            })
        }
    };

    typeHandleClick = (event) => {
        console.log('cong tru nhan chia', event)
        if (this.state.number) {
            this.setState({
                type: event,
            });

        }
        console.log('type', this.state)

    }

    equalHandleClick = () => {
        if (this.state.number && this.state.numberStore && this.state.type) {
            switch (this.state.type) {
                case '+':
                    const addition = ((parseFloat(this.state.number) + parseFloat(this.state.numberStore)) * 100) / 100;
                    console.log(addition)
                    this.setState({
                        result: addition
                    })
                    break;
                case '-':
                    const subtraction = ((parseFloat(this.state.number) - parseFloat(this.state.numberStore)) * 100) / 100;
                    this.setState({
                        result: subtraction
                    })
                    break;
                case '/':
                    const divide = ((parseFloat(this.state.number) / parseFloat(this.state.numberStore)) * 100) / 100;
                    this.setState({
                        result: divide
                    })
                    break;
                case '*':
                    const multiplication = ((parseFloat(this.state.number) * parseFloat(this.state.numberStore)) * 100) / 100;
                    this.setState({
                        result: multiplication
                    })
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        const { number, numberStore, result, type } = this.state
        return (
            <div className="frame">
                <CalculatorTitle title="Calculator" />
                <div className="mainCalc">
                    <OutputScreen number={number} numberStore={numberStore} type={type} answer={result} />
                    <div className="button-row">
                        <ClearButton className="btn-action" label={'Clear'} handleClearValue={this.handleClearValue} />
                        <BackButton className="btn-action" label={'Delete'} handleBackButton={this.handleBackButton} />
                        <FunctionButton className="btn-action" label={'*'} typeHandleClick={this.typeHandleClick} />
                        <FunctionButton className="btn-action" label={'/'} typeHandleClick={this.typeHandleClick} />
                    </div>
                    <div className="button-row">
                        <ButtonsNumbers label={'7'} handleClick={this.handleClick} />
                        <ButtonsNumbers label={'8'} handleClick={this.handleClick} />
                        <ButtonsNumbers label={'9'} handleClick={this.handleClick} />
                        <FunctionButton className="btn-action" label={'+'} typeHandleClick={this.typeHandleClick} />
                    </div>
                    <div className="button-row">
                        <ButtonsNumbers label={'4'} handleClick={this.handleClick} />
                        <ButtonsNumbers label={'5'} handleClick={this.handleClick} />
                        <ButtonsNumbers label={'6'} handleClick={this.handleClick} />
                        <FunctionButton className="btn-action" label={'-'} typeHandleClick={this.typeHandleClick} />
                    </div>
                    <div className="button-row">
                        <ButtonsNumbers label={'1'} handleClick={this.handleClick} />
                        <ButtonsNumbers label={'2'} handleClick={this.handleClick} />
                        <ButtonsNumbers label={'3'} handleClick={this.handleClick} />
                        <ButtonsNumbers className="btn-action" label={'.'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row button-bottom">
                        <ButtonsNumbers label={'0'} handleClick={this.handleClick} />
                        <EqualButton className="btn-action" label={'='} equalHandleClick={this.equalHandleClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
