import React from 'react';
import './women.css';
import Item from './item';
import singleItem from './singleItem';
import { Link } from 'react-router-dom';


const Women = (props) => {
   // console.log('womens object', props)
    return (
        <main>
            <section className="women">
                <div className="container">
                    <h1>Women page</h1>
                    <div className="women-wrapper">
                        {props.womens.map((item, index) => {
                            return (
                                <div className="link">
                                    <Item itemImage={item.image} itemTitle={item.title} itemPrice={item.price} itemDescription={item.description} id={item.id} user={props.user} handleLogout={props.handleLogout}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Women;