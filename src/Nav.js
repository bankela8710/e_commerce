import React from 'react';
import './header.css';
import './App.css';
import { FaHamburger } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Cart from './cart';


const Nav = () => {
    const navSlide = () => {
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.nav-burger');
        const navLinks = document.querySelectorAll('.nav-links li');


        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

    }
    return (
        <div className="container">
            <div className="nav-wrapper">
                <div className="nav-logo">
                    <Link className="logo-link" to="/">
                        <h2>BANKELA SHOP</h2>
                    </Link>
                </div>
                <ul className="nav-links" onClick={navSlide}>
                    <li >
                        <NavLink to='/' activeStyle={
                            { borderBottom: '3px solid white' }
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li > 
                        <NavLink to='/women' activeStyle={
                            { borderBottom: '3px solid white' }
                            }>
                            Women
                        </NavLink>
                    </li>
                    <li > 
                        <NavLink to='/men' activeStyle={
                           { borderBottom: '3px solid white' }
                           }>
                           Men
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to='/jewellery' activeStyle={
                           { borderBottom: '3px solid white' }
                           }>
                           Jewellery
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to='/accessories' activeStyle={
                           { borderBottom: '3px solid white' }
                           }>
                           Accessories
                        </NavLink>
                    </li>
                </ul>
                <div className="cart-wrapper">
                    <Cart />
                    <div className="nav-burger" onClick={navSlide}>
                        <div className="burger line1"></div>
                        <div className="burger line2"></div>
                        <div className="burger line3"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Nav;