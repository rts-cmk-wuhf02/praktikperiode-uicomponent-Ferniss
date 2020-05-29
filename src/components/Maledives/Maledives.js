import React, { useState, useEffect } from "react";
import { cx, css } from "emotion";

const maledivsTemplate = css`
  background-color: white;
  width: 100%;
  height: 100%;
  text-align-last: start;
  padding: 10px;
  border: 1px solid;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: 0;
`
const padding = css`
  padding-left: 15px;
`
const subtitle = css`
  padding-left: 15px;
  color: blue;
`

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'vrozao3z6bfk',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'KTkNhkspKPVbfBzlN98d-R36llsoIaZTohcPvcIOHqU'
})

function Malediv(){
  let [content, setContent] = useState({});
  useEffect(() => {
  client.getEntry('6ylWkQtDSaMxP1CI8YJJ2z')
  .then((entry) => {
    client.getAssets('38WgPAayfgRGZ96Yax4F3y')
    .then((asset) => {
      setContent({
        Image: asset.items[0].fields.file.url,
        title: entry.fields.title,
        subtitle: entry.fields.subtitle,
        description: entry.fields.description,
      })
    }
  )
})
      .catch(console.error)
})
return(


  <div id="Maledives" className={cx(maledivsTemplate)}>

    <img src={content.Image} alt="" />  
    <p className={cx(subtitle)}>{ content.subtitle }</p>
    <h1 className={cx(padding)}>{ content.title }</h1>
    <p className={cx(padding)}>{ content.description }</p>
    
  </div>
)}
export default Malediv;


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