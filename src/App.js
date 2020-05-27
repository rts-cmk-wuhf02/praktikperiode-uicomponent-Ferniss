import React from 'react';
import logo from './logo.svg';
import './App.css';
import Maledives from './components/Maledives/Maledives.js';
import Outdoor from './components/outdoor/outdoor.js';
import Delivery from './components/delivery/delivery.js';
import Parcels from './components/parcels/parcels.js';
import Check from './components/check/check.js';
import Service from './components/service/service.js';
import { Router, redirectTo } from "@reach/router";
import { cx, css } from "emotion";
const flex = css`
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 1fr 1fr 1fr 1fr;

`

function App() {
  
  return (

    <div id="App" className={cx(flex)}>
      
      <Maledives />
      <Outdoor />
      <Delivery />
      <Parcels />
      <Check />
      <Service />
    </div>
  );
}

export default App;
