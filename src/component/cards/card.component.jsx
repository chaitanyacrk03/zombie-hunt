import React from 'react'
import './cards.styles.css'

export const Card = (props) => {
    return <div className="card-container">
        <img alt="monsters" src={`https://robohash.org/${props.idvalue}?set=set2&size=180x180`} ></img>
        <h2 > {props.name}</h2>
        <h2> {props.email}</h2>
    </div>
}