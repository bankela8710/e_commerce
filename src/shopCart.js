import React from 'react';
import './shopCart.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { getCarts } from './cart.services';
import {removeCart} from './cart.services';



const ShopCart = () => {
    const cartItems = getCarts();
    console.log(cartItems);

    const removeFromCart =(item)=>{
        console.log('u korpi sam ',item);
    removeCart(item);
    }
    // console.log(props,'array for cart')
    return (
        <section>
            <div className="container">
                <div className="shopcart-wrapper">
                    <h1>Shop cart</h1>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        {cartItems?.map((props,index) => {
                            console.log(props,'evo ga ovde imamo ga')
                            return(
                            <tr>
                                <td className="product-img">
                                    <Link to={{ pathname: `/singleItem/${props.category}/${props.title}`, props }}>
                                    <div>
                                    <img src={props.itemImage} />
                                    </div>
                                    </Link>
                                    <div>
                                    <h4>{props.itemTitle}</h4>
                                    </div>
                                </td>
                                <td className="quantity">
                                    <div>
                                    <span className="quantity-minus">-</span>
                                    </div>
                                    <div >
                                     <span className="quantity-plus" >+</span>
                                     </div>
                                     </td>
                                <td className="cartItem-price">
                                  <p>{props.itemPrice}$</p>
                                </td>
                                <td>
                                    <span className="remove" onClick={()=>removeFromCart(props)}>remove</span>
                                </td>
                            </tr>
                            )
                        })}

                    </table>

                    <Link to={"/billing"}>
                        <button className="continue-shopping">continue shopping</button>
                    </Link>

                </div>
            </div>
        </section>
    )
}


export default ShopCart;