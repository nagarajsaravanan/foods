import React from 'react';
import '../css/searchBtns.css'

function SearchBtns(props) {
    const getItems = async () => {
        console.log('get items');
    }
    return (
        <div className="search-btn-container">
            {props && props.foodNames && props.foodNames.map((f) => (
                <div id={`name-${f}`} key={f} onClick={() => props.item(f)} className="search-btns">
                <div>{f.charAt(0).toUpperCase() + f.slice(1)}</div>
            </div>
            ))}
        </div>
    );
}

export default SearchBtns;
