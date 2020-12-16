import React, { useState, useEffect } from "react";
import '../css/home.css';
import DefaultImg from '../../../assets/images/default.png'
import SearchBtns from '../../../components/searchBtns/js/SearchBtns';

function Home() {
    const [image, setImage] = useState(false);
    let footNames = ['pizza','briyani'];
    useEffect(async () => {
        setImage(false);
        let res = await fetch('https://foodish-api.herokuapp.com/api/');
        res = await res.json();
        setImage((await res && await res.image) ? res.image : false);
    }, [])
    return (
        <div className="home">
            <div className="food-container">
                {image && image !== false ? <div className="food-pic">
                    <img src={image} title="image" />
                </div> : <div className="food-pic default-img">
                        <img src={DefaultImg} title="image" />
                    </div>}
            </div>
            <SearchBtns foodNames={footNames}/>
        </div>
    );
}

export default Home;
