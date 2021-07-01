import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placevalue, handle }) =>
    <input className="searchelement" type="search"
        placeholder={placevalue}
        onChange={handle}
    ></input>