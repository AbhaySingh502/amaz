import React from "react";
import './App.css';
import Header from './Js/Header';
import HeaderTwo from './Js/HeaderTwo';
import Home from './Js/Home';
import Checkout from './Js/Checkout';
import Login from './Js/Login';
import {BrowserRouter as Router ,Route,Switch}  from "react-router-dom";
 
// import { Switch } from "@mui/material";
function App() {
  return (  
    <Router>
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <HeaderTwo/>
          <Checkout/>
        </Route>
        <Route path="/">
          <Header/>
          <HeaderTwo/>
          <Home/>
        </Route>
      </Switch>
    

    </div>
    </Router>
  );
}

export default App;
