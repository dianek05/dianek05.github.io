import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import ButtonsPanel from "./components/ButtonsPanel"
import Step from "./components/Step"

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter initValue={5} />
    </div>
  );
}


export default App;

