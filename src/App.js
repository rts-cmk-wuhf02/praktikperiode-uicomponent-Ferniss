import React from 'react';
import logo from './logo.svg';
import './App.css';
import Maledives from './components/Maledives/Maledives.js';
import Outdoor from './components/outdoor/outdoor.js';
import { Router, redirectTo } from "@reach/router";
import { css } from "emotion";


function App() {
  
  return (

    <div id="App" className={css`
    display: flex;
    `}>
      
      <Maledives />
      <Outdoor />
    </div>
  );
}

export default App;
