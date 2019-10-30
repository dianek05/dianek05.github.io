import React, { Component } from 'react';
import './ButtonsPanel.css';

class ButtonsPanel extends Component {
    resetOrReinitCounter = (reset) => {
        this.props.resetCounterValue(reset);
    }
    render() {
        return (
            <div className="buttons-panel">
                <button onClick={this.props.changeCounterValue}>Dodaj 1</button>
                <button onClick={() => this.resetOrReinitCounter(false)}>Wróc do początkowej</button>
                <button onClick={() => this.resetOrReinitCounter(true)}>Resetuj</button>
            </div>
        )
    }
}
export default ButtonsPanel;
