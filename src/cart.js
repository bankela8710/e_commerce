import { Link } from 'react-router-dom';
import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import ShopCart from './shopCart';
import './shopCart.css';
import SingleItem from './singleItem';




const Cart = () => {
// const showShopCart = ()=>{
// const shoppingCart=document.querySelector('.shoppingCart');
// const shopcartWrapper = document.querySelector('.shopcart-wrapper');


// shopcartWrapper.classList.toggle('shopcart-wrapper-toggle');

// }

    return (
        <div className="cart">
            <div><FaSearch /></div>
            <div>
                <Link to="/shopCart">
                  <FaShoppingCart className="shoppingCart" /><span>0</span>
                </Link>
                </div>
        </div>

    )
}


export default Cart;