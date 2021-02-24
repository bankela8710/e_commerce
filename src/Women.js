import React from 'react';
import './women.css';
import Item from './item';
import singleItem from './singleItem';
import { Link } from 'react-router-dom';


const Women = (props) => {
    console.log('womens object', props)
    return (
        <main>
            <section className="women">
                <div className="container">
                    <h1>Women page</h1>
                    <div className="women-wrapper">
                        {props.womens.map((item, index) => {
                            return (
                                <Link className="link" to={{ pathname: `/singleItem/${item.category}/${item.title}`, item }}>
                                    <Item itemImage={item.image} itemTitle={item.title} itemPrice={item.price} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Women;