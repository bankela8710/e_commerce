import { Link } from 'react-router-dom';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'
import ShopCart from './shopCart';
import './shopCart.css';
import SingleItem from './singleItem';
import { carts } from './cart.services';
import favoriteItem from './favoriteItem';
import { getsBookmarks } from './cart.services';
import { getCarts } from './cart.services';
import Login from './login';
import { useHistory } from 'react-router-dom';




const Cart = ({ user, handleLogout }) => {
    const history = useHistory();

    console.log({ user }, 'user ovde user')
    const yourFavorite = getsBookmarks();
   
    console.log('cart js, module data', yourFavorite);
    // const showShopCart = ()=>{
    // const shoppingCart=document.querySelector('.shoppingCart');
    // const shopcartWrapper = document.querySelector('.shopcart-wrapper');


    // shopcartWrapper.classList.toggle('shopcart-wrapper-toggle');

    // }
    
        const checkUser = () => {

          //  console.log(user, 'jbt gde si ')
            if (user) {

                history.push("/favorite")

            } else {
                history.push("/login")

            }
        }
        return (
            <div className="cart">
                <div >
                    <FaSearch />
                </div>
                <div className="logout">
                    <span onClick={() =>
                        handleLogout()
                    }>logout</span>
                </div>
                <div className="your-favorite" onClick={() => checkUser()}>
                    <FaHeart /><span></span>
                </div>
                <div>
                    <Link to="/shopCart">
                        <FaShoppingCart className="shoppingCart" /><span></span>
                    </Link>
                </div>
            </div>

        )
    }


    export default Cart;