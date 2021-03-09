import React from 'react';
import './item.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addBookmarks } from './cart.services';
import { addCart } from './cart.services';
import {useHistory } from 'react-router-dom';




const Item = (props) => {
    const user =props.user;
    const handleLogout=props.handleLogout;
    const history =useHistory();

    console.log('item component', props);

    const addInCart = (props) => {
        addCart(props)
    }

    // const addFavorites = (props) => {
    //     addBookmarks(props);
        
    //     // let heart = document.getElementById(heart);
    //     // if (favoriteItems.includes(props.id)){
    //     //     heart.addClass('bookmarkFavorite')
    //     // }
    // }
    const checkUser = (e) => {
    
       if(user){
          
        addBookmarks(e);
          
       }else{
           history.push("/login")
           
       }
   }
    return (

        <article className="item">
            <div className="image-wrapper">
                <div className="image">
                    <img src={props.itemImage} ></img>
                </div>
                <div className="image-hover">
                    <div className="cartShop"><FaShoppingCart onClick={() => addInCart(props)} /></div>
                    <div className="heart" onClick={() => checkUser(props)}><FaHeart itemImage={props.image} itemTitle={props.title} itemPrice={props.price} id={props.id} user={props.user} handleLogout={props.handleLogout} /></div>
                    <div><FaRetweet /></div>
                </div>
            </div>
            <Link className="link" to={{ pathname: `/singleItem/${props.category}/${props.title}`, props }}>
                <div className="item-description">
                    <p className="item-title">{props.itemTitle}</p>
                    <p className="item-price">{props.itemPrice} $</p>
                </div>
            </Link>
        </article>
    );
};

export default Item;