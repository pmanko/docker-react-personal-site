// https://imdev.in/ check it out
import React, { PureComponent } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';


import './App.css';
import IntroContainer from './Intro';
import Cv from './Cv';
import Profile from './Profile';
import Research from './Research';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';
import TopNavContainer from './TopNav';

// import PostContainer from './Post';
import PostContainer from './Post';

// const md = require("raw!../posts/20171216.md");

const App = () => (
  <div>
    <Router>
      <div>
        <TopNavContainer />
        <main className='container-fluid' role='main'>
          <Route path="/01-intro" component={IntroContainer} />
          <Route path="/02-profile" component={Profile} />
          <Route path="/03-cv" component={Cv} />
          <Route path="/04-research" component={Research} />
          <Route path="/05-gallery" component={Gallery} />
          <Route path="/06-contact" component={Contact} />
          <Route path="/07-about" component={About} />
          <Route path="/posts" component={PostContainer} />} />
        </main>
      </div>
    </Router>
  </div>
);

export default App;
