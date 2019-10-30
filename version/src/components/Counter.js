import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
  render() {

      console.log(this.props); //dziedzicxony obiekt z rodzica,

    return (
      <div>
          ilosc kliknięć {this.props.count}, poziom {this.props.level}
      </div>                //tu są propsy o tej samej nazwie co w komponencie w app.js
    );
  }
}

export default Counter;