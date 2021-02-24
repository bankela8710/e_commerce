import React from 'react';
import './home.css';
import Slider from './slider';
import Item from './item';
import Delivery from './delivery';
import Offer from './offer';
import { useEffect, useState } from 'react';
import Jewellery from './Jewellery';
import {Link} from 'react-router-dom';



const Home = (props) => {
  console.log('svi prozivodi u home page', props)
  return (
    <main>
      <section><Slider /></section>

      <section className="best-sellers">
        <div className="container">
          <div className="best-sellers-wrapper">
            <div className="best-sellers-description">
              <h2 className="best-sellers-title">best sellers</h2>
              <p><i>The best productions from us</i></p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            {props.home.map((item, index) => {
              if (index < 4) {
                return (
                  <article className="home-wrapper">
                  <Link className="link" to={{ pathname: `/singleItem/${item.category}/${item.title}`, item }}>
                  <Item itemImage={item.image} itemTitle={item.title} itemPrice={item.price} />
                  </Link>
                  </article>
                )
              }
            })}
          </div>
        </div>
      </section>

      <section className="delivery">

        <Delivery />

      </section>

      <section>
        <Offer />
      </section>

      <section className="featured">
        <div className="container">
          <div className="featured-title">
            <h2>featured products</h2>
            <p><i>Newest trends from top brands</i></p>
          </div>
          <div className="featured-wrapper">
          {props.home.map((item, index) => {
              if (index >= 10) {
                return (
                  <div className="home-featured-wrapper">
                  <Link className="link" to={{ pathname: `/singleItem/${item.category}/${item.title}`, item }}>
                  <Item itemImage={item.image} itemTitle={item.title} itemPrice={item.price} />
                  </Link>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;