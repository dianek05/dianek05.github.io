import React, { Component } from 'react';
import './Step.css';
import ButtonsPanel from './ButtonsPanel';
import Counter from './Counter';


class Step extends Component {
    constructor(props) {
      super(props);
      let step = this._inputStep.value;

      console.log(this._inputStep);
    
    this.handleChange = this.handleChange.bind(this);

    }

   updateStep = () => {
        this.setState((prevValue) => {
            return ({
                counterValue: prevValue.counterValue + `${this._inputStep.value}`,
            });
        });
    }
  
    render() {
        return (
          <div>
            Krok: 
            <input ref={(data) => { this._inputStep = data}} onChange={this.updateState} type="number" />
          </div>
        );
      }
    }

    export default Step;
