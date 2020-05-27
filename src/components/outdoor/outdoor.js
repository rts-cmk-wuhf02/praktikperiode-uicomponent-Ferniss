import React from 'react';
import { css } from "emotion";
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'vrozao3z6bfk',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'KTkNhkspKPVbfBzlN98d-R36llsoIaZTohcPvcIOHqU'
})
client.getEntry('3d7ULDGvCS4tZyEktPbAva')
.then((entry) => {
  client.getAsset('4F6aeGEl46bVXOJy8OXzYG')
  .then((asset) => 
  document.querySelector("#picture").setAttribute("src", asset.fields.file.url))
  document.querySelector("#title").innerHTML = entry.fields.title
  document.querySelector("#subtitle").innerHTML = entry.fields.subtitle
  document.querySelector("#text").innerHTML = entry.fields.description
})
.catch(console.error)

const outdoor = () => (


  <div id="Outdoor" className={css`
  background-color: white;
  width: 372px;
  text-align-last: start;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
  `}>

        <img id="picture" src="" alt="">  
        </img>
    
        <h2 id="subtitle" className={css`padding-left: 15px;`}>
        </h2>

        <h1 id="title" className={css`padding-left: 15px;`}>
        </h1>
          
        <p id="text" className={css`padding-left: 15px;`}>
        </p>
        </div>
      
)
export default outdoor;


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