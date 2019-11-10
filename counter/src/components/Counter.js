import React, { Component } from 'react';
import './Counter.css';
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {
    constructor(props) {
        super(props);
        let initValue = 0;
        let step = 5;

        if (!isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }

        this.state = {
            counterValue: initValue,
        }
    }

    changeValue = () => {
        this.setState((prevValue) => {
            return ({
                counterValue: prevValue.counterValue + 1,
            });
        });
    }

    resetCounter = (resetCounter) => {
        let initValue = 0;
        if (!resetCounter) {
            if (!isNaN(this.props.initValue)) {
                initValue = parseInt(this.props.initValue);
            }
        }
        this.setState({
            counterValue: initValue,
        })
    }
    
    render() {
        return (
            <div className="counter">
                Licznik: 
                <span className="value">{this.state.counterValue}</span>
                <ButtonsPanel changeCounterValue={this.changeValue} resetCounterValue={this.resetCounter} />
            </div>
        );
    }
}

export default Counter;
