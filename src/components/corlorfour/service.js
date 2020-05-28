import React from 'react';
import { cx, css } from "emotion";

const outdoorTemplate = css`
  background-color: white;
  width: 75%;
  height: 272px;
  text-align-last: start;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
`
const padding = css`
  padding-left: 15px;
`
const smallpicture = css`
  width: 200px;
  height: 20%;
`

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'vrozao3z6bfk',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'KTkNhkspKPVbfBzlN98d-R36llsoIaZTohcPvcIOHqU'
})
client.getEntry('3d7ULDGvCS4tZyEktPbAva')
.then((entry) => {
  client.getAssets('4F6aeGEl46bVXOJy8OXzYG')
  .then((asset) => {

      document.querySelector("#picture").setAttribute("src", asset.items[0].fields.file.url)
      document.querySelector("#picture1").setAttribute("src", asset.items[1].fields.file.url)
      document.querySelector("#picture2").setAttribute("src", asset.items[2].fields.file.url)
      document.querySelector("#picture3").setAttribute("src", asset.items[3].fields.file.url)
      document.querySelector("#title").innerHTML = entry.fields.title
      document.querySelector("#subtitle").innerHTML = entry.fields.subtitle
      document.querySelector("#text").innerHTML = entry.fields.description
  }
  )
})
.catch(console.error)

const service = () => (


  <div id="Outdoor" className={cx(outdoorTemplate)}>

        <img id="picture" src="" alt="">  
        </img>
    
        <h2 id="subtitle" className={cx(padding)}>
        </h2>

        <h1 id="title" className={cx(padding)}>
        </h1>
          
        <p id="text" className={cx(padding)}>
        </p>
        <img id="picture1" src="" alt="" className={cx(smallpicture)}>  
        </img>
        <img id="picture2" src="" alt="" className={cx(smallpicture)}>  
        </img>
        <img id="picture3" src="" alt="" className={cx(smallpicture)}>  
        </img>

        </div>
      
)
export default service;


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