import React from 'react';
import { css } from "emotion";
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


  <div id="Maledives" className={css`
  background-color: white;
  width: 372px;
  text-align-last: start;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
  `}>

        <img id="MaledivesPicture" src="" alt="">  
        </img>
    
        <h2 id="MaledivesSubtitle" className={css`padding-left: 15px;`}>
        </h2>

        <h1 id="MaledivesTitle" className={css`padding-left: 15px;`}>
        </h1>
          
        <p id="MaledivesText" className={css`padding-left: 15px;`}>
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