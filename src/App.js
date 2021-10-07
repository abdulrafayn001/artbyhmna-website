import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/main/Main'
import Referral from './components/referral/Referral'
import TrackOrder from './components/track/TrackOrder'
import Subscribe from './components/subscribe/Subscribe';
import ContactUs from './components/contact/ContactUs';
import Cart from './components/cart/Cart';
function App() {
  const Routing=()=>{
  return(
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/affiliate-program" component={Referral} />
      <Route exact path="/track-order" component={TrackOrder} />
      <Route exact path="/subscribe" component={Subscribe} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  )
}
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Routing/>
      </Router>
    </React.Fragment>
  );
}

export default App;
