import React from 'react';
import { cx, css } from "emotion";

const maledivsTemplate = css`
  background-color: white;
  width: 100%;
  height: 471px;
  text-align-last: start;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
  grid-column-start: 1;
  grid-column-end: 2;
`
const padding = css`
  padding-left: 15px;
`
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'vrozao3z6bfk',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'KTkNhkspKPVbfBzlN98d-R36llsoIaZTohcPvcIOHqU'
})
client.getEntry('6ylWkQtDSaMxP1CI8YJJ2z')
.then((entry) => {
  client.getAsset('70P4CEgtnKlOREBQUhZA8C')
  .then((asset) => 
  document.querySelector("#MaledivesPicture").setAttribute("src", asset.fields.file.url))
  document.querySelector("#MaledivesTitle").innerHTML = entry.fields.title
  document.querySelector("#MaledivesSubtitle").innerHTML = entry.fields.subtitle
  document.querySelector("#MaledivesText").innerHTML = entry.fields.description
})
.catch(console.error)

const maldediv = () => (


  <div id="Maledives" className={cx(maledivsTemplate)}>

        <img id="MaledivesPicture" src="" alt="">  
        </img>
    
        <h2 id="MaledivesSubtitle" className={cx(padding)}>
        </h2>

        <h1 id="MaledivesTitle" className={cx(padding)}>
        </h1>
          
        <p id="MaledivesText" className={cx(padding)}>
        </p>
        </div>
      
)
export default maldediv;


// client.getEntries()
// .then(function (entries) {
//   // log the title for all the entries that have it
//   entries.items.forEach(function (entry) {
//       console.log("Hej")
//     if(entry.fields.title) {
//       console.log(entry.fields.title)
//     }
//   })
// })