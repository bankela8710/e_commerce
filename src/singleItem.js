import React,{useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa';
import './singleItem.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopCart from './shopCart';
import {Link} from 'react-router-dom';
import {addCart} from './cart.services';


function SingleItem(props){
    const item = props.location.props;
    console.log(item)


    const [cart, setCart] = useState([]);
//function for add item in cart

const addToCart =(item)=>{
    console.log('u korpi sam ',item);
setCart([...cart,item]);
addCart(item);
}

    return (
        
        <section className="single-item">
            <div className="container">
                
                <div>
               <p>{cart.length}</p>
                    <p>{item?.category}</p>
                </div>
                <div className="single-item-wrapper">
                    <div className="single-item-image">
                        <img src={item?.itemImage} />
                    </div>
                    <div className="single-item-content">
                        <h3 className="single-item-title">{item?.itemTitle}</h3>
                        <p className="single-item-price">{item?.itemPrice}</p>
                        <p className="single-item-description">
                            {item?.itemDescription}
                        </p>
                        <div className="single-item-quantity">
                            <p><span>-</span>0<span onClick={()=>addToCart(item)}>+</span></p>
                        </div>
                        <div className="single-item-basket">
                            <div onClick={()=>addToCart(item)} ><FaShoppingCart />add to cart</div>
                            <div><FaHeart /></div>
                            <div><FaRetweet /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={{ pathname: `/shopCart`, cart }} >

            </Link>
            
        </section>
        
    )



}


export default SingleItem;