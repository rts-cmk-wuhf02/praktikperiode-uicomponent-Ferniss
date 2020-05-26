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
  document.querySelector(".picture").setAttribute("src", asset.fields.file.url))
  document.querySelector(".title").innerHTML = entry.fields.title
  document.querySelector("#subtitle").innerHTML = entry.fields.subtitle
  document.querySelector(".text").innerHTML = entry.fields.description
})
.catch(console.error)

const maldediv = () => (


  <div className="Maledives">
<button className={css`background-color: #000000;`}>
virker det her
    </button>


        <img className="picture" src="" alt="">  
        </img>
    
        <h2 id="subtitle" className={css`background-color: red;`}>
        </h2>

        <h1 className="title">
        </h1>
          
        <p id="" className="text">
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