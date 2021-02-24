import logo from './logo.svg';
import './App.css';
import HeaderSocial from './social';
import Home from './Home';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';
import Jewellery from './Jewellery';
import Accessories from './Accessories';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav';
import Footer from './footer';
import Item from './item';
import Slider from './slider';
import Delivery from './delivery';
import Offer from './offer';
import { useEffect, useState } from 'react';
import ShopCart from './shopCart';
import Billing from './billing';
import React from 'react';
import SingleItem from './singleItem';


function App() {
  useEffect(() => {
    fetchDataItem()
  }, []);

  const [menClothing, setMenClothing] = useState([])
  const [electronic, setElectronic] = useState([])
  const [womenClothing, setWomenClothing] = useState([])
  const [jewelery, setJewerly] = useState([])
  const [allProducts,setAllProducts]=useState([]);


  const fetchDataItem = async () => {
    const dataItems = await fetch("https://fakestoreapi.com/products");
    const productItems = await dataItems.json();
    console.log(productItems, 'sviproizvodi');
    setAllProducts(productItems);
    return productItems.map(item => {
      //getCategory(item.category)
      return filterProductsByCategory(item.category, productItems)

    })
    //productItems.map(item=> getCategories(item.category))
    //console.log('categoryName', categoryName)
  }

  const filterProductsByCategory = (category, products) => {
    console.log('category name', category);
    console.log('products name', products);
    switch (category) {
      case 'women clothing':
        console.log('products', products)
        const womensClothing = products.filter(productItem => productItem.category === category);
        console.log('filtered result', womensClothing);
        setWomenClothing(womensClothing);
       
        break;
      case 'jewelery':
        // code block
        console.log('jewelery category')
        const jeweleries = products.filter(productItem => productItem.category === category);
        console.log('jewelery result', jeweleries);
        setJewerly(jeweleries);
        break;
      case 'men clothing':
        console.log('men clothing case')
        const mensClothing = products.filter(productItem => productItem.category === category);
        console.log('menClothing result', mensClothing);
        setMenClothing(mensClothing);
        break;
      case 'electronics':
        console.log(' electronics');
        const electronics = products.filter(productItem => productItem.category === category);
        console.log('electronics result', electronics);

        setElectronic(electronics);

        break;
      default:
      // code block
    }
  }

  return (
    <div className="app">
      <section className="header-social">
        <div className="container">
          <HeaderSocial />
        </div>
      </section>
      <Router>
        <header className="">
          <div className="container">
            <Nav />
            <Switch>
              <Route path="/shopCart" component={ShopCart} />
              <Route path="/singleItem" component={SingleItem} />
              <Route path="/billing" component={Billing} />
              <Route path="/women" component={()=><Women womens={womenClothing} />} />
              <Route path="/men" component={()=><Men mens={menClothing} />} />
              <Route path="/jewellery"  component={() => <Jewellery jewelerys={jewelery} />} />
              <Route path="/accessories" component={()=><Accessories accessories={electronic} />} />
              <Route path="/" exact component={()=><Home home={allProducts} />} />
             
            </Switch>
          </div>
        </header>
      </Router>

      {/* <main>
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
                <span>{electronic.title}</span>
              </div>
              <Item />
              <Item />
              <Item />
              <Item />
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
              <Item />
              <Item />
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
      </main> */}
      <main>
       
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
