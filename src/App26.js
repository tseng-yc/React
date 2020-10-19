//2020-10-16 react-router選單連結
import React, { useState, useEffect } from 'react';

import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import TodoAppPage from './pages/TodoAppPage';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFoundPage';

function App26() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <TodoAppPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id?">
              <Products />
            </Route>
            {/* 404找不到網頁，需要放在switch路由表最後一個 */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  );
}

export default App26;
