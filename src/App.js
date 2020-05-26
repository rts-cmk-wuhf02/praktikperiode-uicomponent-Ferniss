import React from 'react';
import logo from './logo.svg';
import './App.css';
import Maledives from './components/Maledives/Maledives.js';
import { Router, redirectTo } from "@reach/router";
import { css } from "emotion";


function App() {
  
  return (

    <div className="App">
      
      <Maledives />
    </div>
  );
}

export default App;
