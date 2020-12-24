import React, { useState, useEffect } from "react";
import '../css/home.css';
import DefaultImg from '../../../assets/images/default.png'
import SearchBtns from '../../../components/searchBtns/js/SearchBtns';

function Home() {
    const [image, setImage] = useState(false);
    const [name, setName] = useState(null);
    let foodNames = ['idly', 'dosa', 'pizza', 'burger', 'biryani'];
    useEffect(async () => {
        setName(null);
        getFoodImage();
    }, [])

    const getItem = (name) => {
        activateBtn(name);
        setName(name);
        getFoodImage(name);
    }

    const activateBtn = (name) => {
        let btns = document.querySelectorAll('.search-btns');
            for(let i =0; i < btns.length; i++){
            if(btns[i].id === `name-${name}`){
                btns[i].classList.add('active');
            } else {
                btns[i].classList.remove('active');
            }
        }
    }

    const getFoodImage = async(name = false) => {
        setImage(false);
        let url = '';
        url = name ? `https://foodish-api.herokuapp.com/api/images/${name}`:'https://foodish-api.herokuapp.com/api/';
        let res = await fetch(url);
        res = await res.json();
        setImage((await res && await res.image) ? res.image : false);
    }
    return (
        <div className="home">
            <div className="food-container">
                {image && image !== false ? <div className="food-pic">
                {name && name!= null && <div className="food-name">{name.charAt(0).toUpperCase() + name.slice(1)}</div>}
                    <img src={image} title="" />
                </div> : <div className="food-pic default-img">
                        <img id="loading-img" src={DefaultImg} title="Foodies!!" />
                    </div>}
            </div>
            <SearchBtns foodNames={foodNames} item={getItem}/>
        </div>
    );
}

export default Home;
