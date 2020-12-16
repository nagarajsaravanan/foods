import React from 'react';
import '../css/searchBtns.css'

function SearchBtns(props) {
    console.log('props', props);
    return (
        <div className="search-btn-container">
            {props && props.foodNames && props.foodNames.map((f) => (
                <div className="search-btns">
                <div>{f}</div>
            </div>
            ))}
        </div>
    );
}

export default SearchBtns;
