import React from 'react';
import logo from './logo.svg';
import Classes from './App.module.css';
import Buttons from './CounterComp';

function App() {
  return (
    <div className= { Classes.wrap }>
      
      <Buttons />
    </div>
  );
}


export default App;
