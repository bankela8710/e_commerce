import React from 'react-router-dom';
import { getsBookmarks } from './cart.services';
import { FaShoppingCart } from 'react-icons/fa';
import './favoriteItem.css';
import { addCart } from './cart.services';
import { Link } from 'react-router-dom';
import {removeFavorite} from './cart.services';


const favoriteItem = () => {
    const favoriteItems = getsBookmarks();
    //console.log(favoriteItems, 'imamo favorite')

const removeFavoriteItemFromFavorite = (item)=>{
    removeFavorite(item)
}

    const addFavoriteToCart = (item) => {
        addCart(item);
    }
    return (
        <div className="container">
            <div className="favoriteItem-wrapper">
                <div className="container">
                    <div className="favorite-title">
                        <h2>Your favorites product </h2>
                    </div>
                    {
                        favoriteItems ?
                            favoriteItems.map((props, index) => {
                                console.log(props, 'evo ga favorite ')
                                return (

                                    <div className="favoriteItem">
                                        <div className="favoriteItem-image">
                                            <Link to={{ pathname: `/singleItem/${props.category}/${props.title}`, props }}>
                                                <div className="">
                                                    <img src={props.itemImage} />
                                                </div>
                                            </Link >
                                        </div>
                                        <div className="favoriteItem-title">
                                            <h3>{props.itemTitle}</h3>
                                        </div>
                                        <div className="favoriteItem-price">
                                            <p>{props.itemPrice}$</p>
                                        </div>
                                        <div className="favorite-addToCart" onClick={() => addFavoriteToCart(props)}>
                                            <FaShoppingCart  />add to cart
                                        </div>
                                        <div className="favorite-remove" onClick={()=>removeFavoriteItemFromFavorite(props)}>
                                            <span>remove</span>
                                        </div>
                                    </div>

                                )
                            }) : ''
                    }
                </div>
            </div>
        </div>
    )
}



export default favoriteItem;