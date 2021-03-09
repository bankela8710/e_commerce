import React from 'react';
import './billing.css';
import { carts, getCarts } from './cart.services';



const Billing = () => {
    const cartItems = getCarts();
    //console.log(cartItems,'evo ga u billing')
    return (
        <section>
            <div className="container">
                <div className="billing-wrapper">
                    <div className="billing-form-wrapper">
                        <div className="billing-title">
                            <h2>Billing details </h2>
                        </div>
                        <form class="billing-form" method="get" action="">
                            <div class="form-group">
                                <label for="fname">First Name<span>*</span></label><br></br>
                                <input id="fname" type="text" name="fname" value="" placeholder="First Name" />
                                <p id="invalid-fname"></p>
                            </div>
                            <div class="form-group">
                                <label for="lname">Last Name<span>*</span></label><br></br>
                                <input id="lname" type="text" name="lname" value="" placeholder="Last Name" />
                                <p id="invalid-lname"></p>
                            </div>
                            <div class="form-group">
                                <label for="country">Country<span>*</span></label><br></br>
                                <input id="country" type="text" name="country" value="" placeholder="Country" />
                                <p id="invalid-country"></p>
                            </div>
                            <div class="form-group">
                                <label for="company">Company</label><br></br>
                                <input id="company" type="text" name="company" value="" placeholder="Company" />
                                <p id="invalid-company"></p>
                            </div>
                            <div class="form-group">
                                <label for="adress">Adress<span>*</span></label><br></br>
                                <input id="adress" type="text" name="adress" value="" placeholder="Adress" />
                                <p id="invalid-address"></p>
                            </div>
                            <div class="form-group">
                                <label for="postcode">Postcode /ZIP</label><br></br>
                                <input id="postcode" type="text" name="postcode" value="" placeholder="Postcode" />
                                <p id="invalid-postcode"></p>
                            </div>
                            <div class="form-group">
                                <label for="city">City<span>*</span></label><br></br>
                                <input id="city" type="text" name="city" value="" placeholder="City" />
                                <p id="invalid-name"></p>
                            </div>
                            <div class="form-group">
                                <label for="email">Email<span>*</span></label><br></br>
                                <input id="email" type="email" name="email" value="" placeholder="Mail Address" />
                                <p id="invalid-email"></p>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone<span>*</span></label><br></br>
                                <input id="phone" type="tel" name="phone" value="" placeholder="Phone" />
                                <p id="invalid-phone"></p>
                            </div>
                        </form>
                    </div>

                    <div className="your-order">
                        <h2>your order</h2>
                        <div className="order-container">
                            <div className="your-order-wrapper">
                                <h4>Product</h4>
                                <h4>Price</h4>
                            </div>
                            {  cartItems?
                                cartItems.map((cartItem) => {
                                    console.log(cartItem,'evo ga item u billing provera za id')
                                    return (
                                        <div className="your-order-wrapper">
                                            <div className="your-order-description">
                                                <div className="your-order-image">
                                                    <img src={cartItem.itemImage} />
                                                </div>
                                                <div className="your-order-title">
                                                <p>{cartItem.itemTitle}</p>
                                                </div>
                                            </div>
                                            <div className="your-order-price">
                                                <p>{cartItem.itemPrice}$</p>
                                            </div>
                                        </div>
                                    )
                                }):''
                            }
                            <div className="your-order-wrapper">
                                <h3>Total</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="form-button ">
                        <button type="button" >place order</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Billing;