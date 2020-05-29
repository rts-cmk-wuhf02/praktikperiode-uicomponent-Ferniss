import React, { useState, useEffect } from "react";
import { cx, css } from "emotion";

const outdoorTemplate = css`
  background-color: white;
  height: 471px;
  text-align-last: start;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
  grid-column-start: 2;
  grid-column-end: 5;
  display: flex;
`
const padding = css`
  padding-left: 15px;
`
const smallpicture = css`
  width: 20%;
  height: 20%;
`
const bigpicture = css`
  width: 100%;
  height: 20%;
`

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'vrozao3z6bfk',
  environment: 'master',
  accessToken: 'KTkNhkspKPVbfBzlN98d-R36llsoIaZTohcPvcIOHqU'
})


function Outdoor() {
  let [content, setContent] = useState({ smallImages: [] });
  useEffect(() => {
    client.getEntry('3d7ULDGvCS4tZyEktPbAva')
      .then((entry) => {
        client.getAssets('4F6aeGEl46bVXOJy8OXzYG')
        .then((asset) => {
          //console.log(asset)
          asset.items.forEach(item => {
            //console.log(item.fields.hasOwnProperty("file"))
          })

          setContent({
            title: entry.fields.title,
            subtitle: entry.fields.subtitle,
            description: entry.fields.description,
            bigImage: asset.items[4].fields.file.url,
            smallImages: [
              asset.items[1].fields.file.url,
              asset.items[2].fields.file.url,
              asset.items[3].fields.file.url
            ]
          })
        }
        )
      })
      .catch(console.error)
  })
  return (


  <div id="Outdoor" className={cx(outdoorTemplate)}>
        <div>
          <img src={content.bigImage} alt="" className={cx(bigpicture)} />
        </div>
        <div>
        <h2 className={cx(padding)}>{ content.subtitle }</h2>
        <h1 className={cx(padding)}>{ content.title }</h1>
        <p className={cx(padding)}>{ content.description }</p>

        { content.smallImages.map(url => 
          <img src={url} alt="" className={cx(smallpicture)} key={url} />  
        ) }
        </div>

        </div>
      
)}
export default Outdoor;