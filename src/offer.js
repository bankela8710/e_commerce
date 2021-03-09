import React from 'react';
import './App.css';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';


const Offer = () => {
    return (
        <div className="offer-wrapper">
            <div className="offer-item">
                <img src={img6} />
            </div>
            <div className="offer-item">
                <img src={img7}/>
            </div>
            <div className="offer-item">
                <img src={img8}/>
            </div>
        </div>
    )
}


export default Offer;