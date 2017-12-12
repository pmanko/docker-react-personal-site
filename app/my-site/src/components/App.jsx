import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Home from './Home'
import Cv from './Cv'

const App = () => (
  <div>
    <Router>
      <div>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/cv'>CV</NavLink>
        </nav>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={Cv} />
        </div>
      </div>
    </Router>
  </div>
);

export default App;
