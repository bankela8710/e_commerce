import React from 'react';
import './item.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa';



const Item = (props) => {

    console.log('item component', props);
    const addInBasket = () => {
        console.log('imamo li te ovde ?', props);

    }
    return (

        <article className="item">
            <div className="image-wrapper">
                <div className="image">
                    <img src={props.itemImage} ></img>
                </div>
                <div className="image-hover">
                    <div onClick={addInBasket}><FaShoppingCart /></div>
                    <div><FaHeart /></div>
                    <div><FaRetweet /></div>
                </div>
            </div>
            <div className="item-description">
                <p className="item-title">{props.itemTitle}</p>
                <p className="item-price">{props.itemPrice} $</p>
            </div>
        </article>
    );
};

export default Item;