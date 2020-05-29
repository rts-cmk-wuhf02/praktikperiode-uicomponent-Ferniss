import React, { useState, useEffect } from "react";
import { cx, css } from "emotion";

const travel = css`
width: 23.2em;
height: 29.8em;
padding: 10px;
border: 1px solid;
padding: 0;

@media screen and (min-width: 1200px){
        background-color: red;
        width: 75%;
        .travel{
            display: flex;
        }
}
`
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'vrozao3z6bfk',
  environment: 'master',
  accessToken: 'KTkNhkspKPVbfBzlN98d-R36llsoIaZTohcPvcIOHqU'
})

export default function Fnyf() {
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
                    <img src={ url } alt="" key={url} />    
                ) }
            </section>
        </div>
    )
}
