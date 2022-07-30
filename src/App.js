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
import SlideServices from "./services/SliderServices"
import FeedbackServices from "./services/FeedbackServices"
import ProductsServices from "./services/ProductsServices"


function App() {
  const [loading, setLoading] = useState(true);
  const setSliderImages = useStore((state) => state.setSliderImages )
  const setFeedbacks = useStore((state) => state.setFeedbacks )
  const setProducts = useStore((state) => state.setProducts )
  const setCategories = useStore((state) => state.setCategories )
  useEffect(() => {
    let sliderImages =[]
    let feedbacks = []
    let categories = []
    let products = []

    const slidesRef = SlideServices.getAll()
    const feedbackRef = FeedbackServices.getAll()
    const prouctsRef = ProductsServices.getAll()

    prouctsRef.once('value', snap => {
      snap.forEach(child => {
          categories = [...categories, child.key];
          for (var key in child.val()) {
            products.push(child.val()[key])
          }
        });
        setProducts(products)
        setCategories(categories)
    });

    slidesRef.once('value', snap => {
        snap.forEach(child => {
            sliderImages = [...sliderImages,{url: child.val().url, public_id: child.val().public_id}];
        });
      setSliderImages(sliderImages)
    });

    feedbackRef.once('value', snap => {
      snap.forEach(child => {
        feedbacks = [...feedbacks,{profile: child.val().profile, image: child.val().image, name: child.val().name, feedback: child.val().feedback}];
      });
      setFeedbacks(feedbacks)
      setTimeout(()=>{setLoading(false)}, 2000);
  });
  },[])


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
