import React from 'react';
import './App.css';
import './men.css';
import Item from './item';
import { Link } from 'react-router-dom';

const Men = (props) => {
   // console.log('mens object', props);
    return (
        <main>
            <section className="men">
                <div className="container">
                    <h1>Men page</h1>
                    <div className="men-wrapper">
                        {props.mens.map((item, index) => {
                            return (
                                <div className="link">
                                    <Item itemImage={item.image} itemTitle={item.title} itemPrice={item.price} id={item.id} itemDescription={item.description} user={props.user} handleLogout={props.handleLogout}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Men;