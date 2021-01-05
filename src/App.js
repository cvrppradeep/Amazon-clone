import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
<div className="app">
 <Switch>
   <Route path="/checkout">
     <h1>Checkout</h1>
   </Route>
   <Route path="/login">
     <h1>Login</h1>
   </Route>
   <Route path="/">
     <Header />
     <Home />
   </Route>
 </Switch>
    </div>
    </Router>
  );
}

export default App;
