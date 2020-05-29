import React from 'react';
import './App.css';
// import Maledives from './components/Maledives/Maledives.js';
// import Outdoor from './components/outdoor/outdoor.js';
// import Delivery from './components/corlorfour/delivery.js';
// import Parcels from './components/corlorfour/parcels.js';
// import Check from './components/corlorfour/check.js';
// import Service from './components/corlorfour/service.js';
// import Collection1 from './components/collection/collection1.js';
// import Collection2 from './components/collection/collection2.js';
// import Collection3 from './components/collection/collection3.js';
import Fnyf from "./components/fnyf";
import Foo from "./components/foo";
import { cx, css } from "emotion";


function App() {
  
  return (

    <div id="App">
      
      {/* <Maledives />
      <Outdoor/> */}
      <Fnyf />
      {/* <Delivery />
      <Parcels />
      <Check />
      <Service />
      <Collection1 />
      <Collection2 />
      <Collection3 /> */}
      <Foo/>
    </div>
  );
}

export default App;
