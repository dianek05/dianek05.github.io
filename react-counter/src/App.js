import React from 'react';
import './App.css';

import Counter from './Components/Counter'
import CounterClass from './Components/CounterClass'

function App() {
  return (
    <div className="App">
      <Counter myText="Instantacja komponentu Counter #1"></Counter>
      <Counter></Counter>
      <Counter myText="Instantacja komponentu Counter #3"></Counter>
      <Counter myText="Instantacja komponentu Counter #4"></Counter>
      
      <CounterClass color="yellow" />
    </div>
  );
}

export default App;
