import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main/Main'
import Referral from './components/referral/Referral'
import TrackOrder from './components/track/TrackOrder'
import Subscribe from './components/subscribe/Subscribe';
import ContactUs from './components/contact/ContactUs';
import Cart from './components/cart/Cart';
import Product from './components/product/Product';
import Loading from './components/loading/Loading';
import { useStore } from './store';
import { useState, useEffect } from 'react';
import './firebase'

import { getDatabase, ref, child, get } from "firebase/database";


function App() {
  const [loading, setLoading] = useState(true);
  const setSliderImages = useStore((state) => state.setSliderImages )
  const setFeedbacks = useStore((state) => state.setFeedbacks )
  const setProducts = useStore((state) => state.setProducts )
  const setCategories = useStore((state) => state.setCategories )

  const dbRef = ref(getDatabase());

  useEffect(() => {

    get(child(dbRef, `/products`)).then((snapshot) => {
      if (snapshot.exists()) {
        const allProducts = snapshot.val()
        let products  = []
        let categories = []
        Object.keys(allProducts).forEach(key => {
          categories.push(key)
          const categoryProducts = allProducts[key]
          Object.keys(categoryProducts).forEach(key => {
            products.push(categoryProducts[key])
          })
        });
        setProducts(products)
        setCategories(categories)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    get(child(dbRef, `/slider-images`)).then((snapshot) => {
      if (snapshot.exists()) {
        setSliderImages(Object.values(snapshot.val()))
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    get(child(dbRef, `/customer-feedback`)).then((snapshot) => {
      if (snapshot.exists()) {
        setFeedbacks(Object.values(snapshot.val()))
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    setTimeout(()=>{setLoading(false)}, 2000);
  },[dbRef])


  const Routing=()=>{
  return(
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/affiliate-program" component={Referral} />
      <Route exact path="/track-order" component={TrackOrder} />
      <Route exact path="/subscribe" component={Subscribe} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/product" component={Product} />
    </Switch>
  )
}
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        {loading === true? <Loading/> : <Routing/>}
      </Router>
    </React.Fragment>
  );
}

export default App;
