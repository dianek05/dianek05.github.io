import React, { Component } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';

import './App.css';


class App extends Component {

  constructor(){
    super(); // funkcja wyciągająca dziedziczenie - potrzebna
    this.state = { // obiekt - kluczowe słowo
      count : 0,  //przechowuje w obiekcie własciwosci stanu
      level : 1,
      levelFlag : 10
    } // koniec obiektu
  }

  countUp = () => {
    // console.log('test');
    this.setState((prevState)=>{
      if((prevState.count+1) %this.state.levelFlag !== 0){ // sprawdzamy czy zwraca zero
        return({
          count: ++prevState.count
        });
      } else {
        return({
          count: ++prevState.count,
          level: ++prevState.level,
          levelFlag: prevState.levelFlag *2
        });
      }
      
    });
    //przy zapisie, ustawia nowy stan nie robi update  this.setState({count: 1, level:1})
  }

  render() {
    return (
      //button addCount przupisujemy this.countUp i trzeba ją teraz zdefiniować pod konstrktorem
      <div className="App">
        <Button  addCount={this.countUp}/> 
        <Counter count={this.state.count} level={this.state.level}/>
      </div>            // ten state pobierany jest z góry pod constructorem z this.state
    );
  }
}

export default App;

// ważne!!!!!!!!!
// element funkcyjny tylko uzywamy gdy component nie ma state