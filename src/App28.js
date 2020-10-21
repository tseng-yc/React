import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Product2 from './pages/Product2';

import Menu from './components/Menu';

function App28() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product2">
              <Product2 />
            </Route>
            <Route exact path="/">
              <ProductList />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App28;
