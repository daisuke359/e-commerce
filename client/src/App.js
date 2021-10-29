import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Collection from './pages/collection/Collection';
import ItemDetail from './pages/item/ItemDetail';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/collection/all">
          <Collection/>
        </Route>
        <Route path="/collection/:id">
          <ItemDetail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
