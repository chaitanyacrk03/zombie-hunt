import React from 'react';
import './cardlist.styles.css';
import { Card } from '../cards/card.component.jsx';
export const CardList = (props) =>
    <div className="card-list">
        {props.monster.filter(m => m.name.toLowerCase().includes(props.searchmonster.toLowerCase())).map(value => <Card key={value.id} idvalue={value.id} name={value.name} email={value.email} />)}
    </div>