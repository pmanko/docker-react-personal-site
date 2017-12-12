// https://imdev.in/ check it out

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';

import Home from './Home';
import Cv from './Cv';
import Profile from './Profile';
import Research from './Research';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';
import TopNav from '../containers/TopNav';

const App = () => (
  <div>
    <Router>
      <div>
        <TopNav />
        <main className='container-fluid' role='main'>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/cv" component={Cv} />
          <Route path="/research" component={Research} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </main>
      </div>
    </Router>
  </div>
);

export default App;
