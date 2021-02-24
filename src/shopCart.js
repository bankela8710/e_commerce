import React from 'react';
import './shopCart.css';
import {Link,BrowserRouter as Router} from 'react-router-dom';



const ShopCart = () => {
    
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
                        <tr>
                            <td className="product-img"><p>slika</p><h4>ime proizvoda</h4></td>
                            <td className="quantity">1<span className="quantity-minus">-</span> <span className="quantity-plus">+</span></td>
                            <td>200$</td>
                        </tr>
                    </table>
                    <Router>
                        
                    <Link to={"/billing"}>
                    <button className="continue-shopping">continue shopping</button>
                    </Link>
                    
                    </Router>
                </div>
            </div>
        </section>
    )
}


export default ShopCart;