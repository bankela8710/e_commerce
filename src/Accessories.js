import React from 'react';
import Item from './item';
import './accessories.css';
import {Link} from 'react-router-dom';

const Accessories = (props) => {
    console.log('accessories object', props)
    return (
        <main>
            <section className="accessories">
                <div className="container">
                    <h1>Accessories page</h1>
                    <div className="accessories-wrapper">
                        {props.accessories.map((item, index) => {
                            return (
                                <div className="accessories-wrapper-item">
                                <Link className="link" to={{ pathname: `/singleItem/${item.category}/${item.title}`, item }}>
                                <Item itemImage={item.image} itemTitle={item.title} itemPrice={item.price} />
                                </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Accessories;