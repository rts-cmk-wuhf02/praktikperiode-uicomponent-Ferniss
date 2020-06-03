import React, { useState, useEffect } from "react";
import { cx, css } from "emotion";

const travel = css`
  background-color: white;
  height: 350px;
  text-align-last: start;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
  grid-column-start: 2;
  grid-column-end: 2;
`
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'vrozao3z6bfk',
  environment: 'master',
  accessToken: 'KTkNhkspKPVbfBzlN98d-R36llsoIaZTohcPvcIOHqU'
})

export default function Parcels() {
    let [content, setContent] = useState({});
    
    useEffect(() => {
        client.getEntries("Services")
        .then(response => {
            let item = response.items[0].fields;
            setContent({
                title: item.title,
                description: item.description,
                image: item.image
            });
        })
    })
    return (
        <div className={cx(travel)}>
              <img src={ content.image } alt="" />
            <h1>{ content.title }</h1>
            <p>{ content.description }</p>
        </div>
    )
}