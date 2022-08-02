import React from 'react'

export default function Details(props) {
    return (
        <div className='details--about'>
            <h1>{props.about}</h1>
            <p>{props.detail}</p>
        </div>
    )
}
