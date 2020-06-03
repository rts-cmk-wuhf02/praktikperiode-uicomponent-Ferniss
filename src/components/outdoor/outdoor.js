import React, { useState, useEffect } from "react";
import { cx, css } from "emotion";

const travel = css`
background-color: white;
  height: 450px;
  text-align-last: start;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
  grid-column-start: 2;
  grid-column-end: 4;
`
const img = css`
width: 5em;
height: 5em;
`
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'vrozao3z6bfk',
  environment: 'master',
  accessToken: 'KTkNhkspKPVbfBzlN98d-R36llsoIaZTohcPvcIOHqU'
})

export default function TravelLandscape() {
    let [content, setContent] = useState({ images: [] });
    
    useEffect(() => {
        client.getEntries("Travel")
        .then(response => {
            let item = response.items[1].fields;
            let images = item.images.map(image => image.fields.file.url);
            let bigImage = item.images.shift();
            setContent({
                title: item.title,
                subtitle: item.subtitle,
                description: item.description,
                bigImage,
                images
            });
        })
    })
    return (
        <div className={cx(travel)}>
            
            <h1>{ content.title }</h1>
            <h2>{ content.subtitle }</h2>
            <p>{ content.description }</p>
            <img src={ content.bigImage } alt="" />
            <section>
                { content.images.map(url =>
                    <img src={ url } alt="" key={url} className={cx(img)} />    
                ) }
            </section>
        </div>
    )
}