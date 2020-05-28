import React from 'react';
import logo from './logo.svg';
import './App.css';
import Maledives from './components/Maledives/Maledives.js';
import Outdoor from './components/outdoor/outdoor.js';
import Delivery from './components/corlorfour/delivery.js';
import Parcels from './components/corlorfour/parcels.js';
import Check from './components/corlorfour/check.js';
import Service from './components/corlorfour/service.js';
import Collection1 from './components/collection/collection1.js';
import Collection2 from './components/collection/collection2.js';
import Collection3 from './components/collection/collection3.js';
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
      <Collection1 />
      <Collection2 />
      <Collection3 />
    </div>
  );
}

export default App;
