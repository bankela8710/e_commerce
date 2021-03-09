import React from 'react';
import './cookies.css';
import './App.css';


const Cookies = (props) => {
    return (
        <div className="container">
            <div className="cookies-wrapper">
                <p>Ovaj sajt koristi kolačiće u cilju boljeg korisničkog iskustva,
                personalizacije sadržaja, pružanja funkcije društvenih medija i
                analiziranja saobraćaja u skladu sa Politikom o kolačićima
            </p>
                <div className="cookies-button">
                    <button onClick={props.handleModalClick}>X</button>
                    <button onClick={props.handleModalClick}>Slazem se</button>
                </div>
            </div>
        </div>
    )

}

export default Cookies;