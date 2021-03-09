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
import Cookies from './cookies';
import favoriteItem from './favoriteItem';
import fire from './fire';
import Login from './login';
import {getCarts} from './cart.services';



function App() {
  useEffect(() => {
    fetchDataItem();
    authListener();
  }, []);

  const [menClothing, setMenClothing] = useState([])
  const [electronic, setElectronic] = useState([])
  const [womenClothing, setWomenClothing] = useState([])
  const [jewelery, setJewerly] = useState([])
  const [allProducts, setAllProducts] = useState([]);
  const [disableCookies, setUserToStorage] = useState(true);

  //for login and sign in
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  //functions for clear inputs ( email and password ) and clear errors
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }


  //function for login
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  //function for signup
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }
  //function for logout
  const handleLogout = () => {
    fire.auth().signOut();
   
  }


  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
        getCarts()
      }
    })
  }




  const fetchDataItem = async () => {
    const dataItems = await fetch("https://fakestoreapi.com/products");
    const productItems = await dataItems.json();
    console.log(productItems, 'sviproizvodi');
    setAllProducts(productItems);
    checkIfUserExistInStorage();
    return productItems.map(item => {
      //getCategory(item.category)
      return filterProductsByCategory(item.category, productItems)

    })
    //productItems.map(item=> getCategories(item.category))
    //console.log('categoryName', categoryName)

  }

  const checkIfUserExistInStorage = () => {
    if (localStorage.getItem('userName') === 'Accepted cookies') {
      // console.log('imamo ga u storage');
      return setUserToStorage(true);
    } else {
      return setUserToStorage(false);
    }
  }
  const handleModalEvents = (event) => {
    const modalWrapper = document.querySelector('.cookies-wrapper');
    console.log('modal event value', event.target.innerText)
    if (event.target.innerText === 'Slazem se') {
      localStorage.setItem('userName', 'Accepted cookies');
      modalWrapper.classList.add('hide-cookies');
    } else {
      // zatvoriti modal i ne snimamo user-a 
      modalWrapper.classList.add('hide-cookies');
    }

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
            <Nav user={user}  handleLogout={handleLogout}/>

            <Switch>
              <Route path="/login" component={() =>
                <Login
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailErorr={emailError}
                  passwordError={passwordError}
                 
                />} />
              <Route path="/favorite" component={favoriteItem} />
              <Route path="/shopCart" component={() => <ShopCart />} />
              <Route path="/singleItem" component={SingleItem} />
              <Route path="/billing" component={Billing} />
              <Route path="/women" component={() => <Women womens={womenClothing} user={user}  handleLogout={handleLogout}/>} />
              <Route path="/men" component={() => <Men mens={menClothing} user={user}  handleLogout={handleLogout}/>} />
              <Route path="/jewellery" component={() => <Jewellery jewelerys={jewelery} user={user}  handleLogout={handleLogout}/>} />
              <Route path="/accessories" component={() => <Accessories accessories={electronic} user={user}  handleLogout={handleLogout}/>} />
              <Route path="/" exact component={() => <Home home={allProducts} user={user}  handleLogout={handleLogout} />} />

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
        {!disableCookies ? <Cookies handleModalClick={(event) => handleModalEvents(event)} /> : null}
      </footer>
    </div>
  );
}

export default App;
