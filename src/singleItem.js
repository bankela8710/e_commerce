import React,{useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa';
import './singleItem.css';
import './App.css';


function SingleItem(props){
    const item = props.location.item;
   // console.log(item)


    const [cart, setCart] = useState([]);
//function for add item in cart

const addToCart =(item)=>{
    console.log('u korpi sam ',item);
setCart([...cart,item]);
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
                        <img src={item?.image} />
                    </div>
                    <div className="single-item-content">
                        <h3 className="single-item-title">{item?.title}</h3>
                        <p className="single-item-price">$250.00</p>
                        <p className="single-item-description">
                            {item?.description}
                        </p>
                        <div className="single-item-quantity">
                            <p><span>-</span>0<span>+</span></p>
                        </div>
                        <div className="single-item-basket">
                            <div ><FaShoppingCart onClick={()=>addToCart(item)}/>add to cart</div>
                            <div><FaHeart /></div>
                            <div><FaRetweet /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )



}


export default SingleItem;