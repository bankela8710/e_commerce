import React from 'react';
import {FaPaperPlane} from 'react-icons/fa';
import {FaRetweet} from 'react-icons/fa';
import {FaRocket} from 'react-icons/fa';
import {FaSketch} from 'react-icons/fa';


const Delivery = () => {
    return (
        <div className="delivery-wrapper">
            <div>
                <p><FaSketch /></p>
                <h4>special offers</h4>
                <p className="delivery-text">Shop Big Save Big</p>
            </div>
            <div>
                <p><FaPaperPlane /></p>
                <h4>free delivery</h4>
                <p className="delivery-text">On Orders Above $99</p>
            </div>
            <div>
                <p><FaRetweet /></p>
                <h4>30 days return</h4>
                <p className="delivery-text">Policy We Offers</p>
            </div>
            <div>
                <p><FaRocket /></p>
                <h4>fastest shipping</h4>
                <p className="delivery-text">2 Days Express </p>
            </div>
        </div>
    );
};


export default Delivery;