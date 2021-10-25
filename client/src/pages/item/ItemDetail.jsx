import React from 'react'
import { useParams } from 'react-router'

export default function ItemDetail() {

    const id = useParams().id;

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
