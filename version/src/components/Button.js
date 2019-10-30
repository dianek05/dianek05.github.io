import React, { Component } from 'react';
import '../App.css';

class Button extends Component {

    //funkcja aktualizacji counter, trzeba ją umiescić w button onClick{}, za pomocą this.updateCounter()
    updateCounter = () =>{
        // console.log('test');
        this.props.addCount(); //zmieniamy nazwę tej metody, i musimy ją przekazać do app.js
    }

  render() {

    console.log(this.props); // nie ustawione zwraca pusty obiekt

    return ( //działa po kliknięciu, wywołuje alert, <button onClick={()=>{alert('test')}}>
             //trzeba zaktualizować propsy, inaczej nie będziemy w stanie wyjsc wyżej
      <button onClick={()=>{this.updateCounter()}}>
          licz      
      </button>
    );
  }
}

export default Button;