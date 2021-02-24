import React from 'react';
import Item from './item';
import './kids.css';

const Kids = () => {

    return (
        <main>
            <section className="kids">
                <div className="container">
                    <h1>Kids page</h1>
                    <div className="kids-wrapper">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Kids;