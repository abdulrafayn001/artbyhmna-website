import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
      </Router>
    </React.Fragment>
  );
}

export default App;
