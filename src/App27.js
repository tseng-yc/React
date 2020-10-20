import React, { useState, useEffect } from 'react';

import MyNavbar2 from './components/MyNavbar2';
import MyFooter2 from './components/MyFooter2';
import MainContent2 from './components/MainContent2';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Counter from './pages/Counter';

function App27() {
  return (
    <Router>
      <>
        <MyNavbar2 />
        <MainContent2>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
        </MainContent2>
        <MyFooter2 />
      </>
    </Router>
  );
}

export default App27;
