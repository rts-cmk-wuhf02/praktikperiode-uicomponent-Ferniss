import React, { useState, useEffect } from "react";

export default function Foo() {
    let [thing, setThing] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setThing(thing++);
        }, 1000);
    });

    return (
        <p>{ thing }</p>
    )
}