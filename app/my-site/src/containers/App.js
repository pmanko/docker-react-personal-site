// https://imdev.in/ check it out
import React from 'react';
import {
  connect
} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import IntroContainer from './Intro';
// import Cv from './Cv';
// import Profile from './Profile';
// import Research from './Research';
// import Gallery from './Gallery';
// import Contact from './Contact';
// import About from './About';
//
import {
  postAdd,
  navToggle
} from '../actions';
import selector from '../selector';

import TopNav from '../components/TopNav';
import Post from '../components/Post';

import './style.css';

// TODO: Render Post Container with props!

class App extends React.Component{

  handlePostAdd = (title, content) => {
    this.props.dispatch(postAdd(title, content));
  };

  handleNavToggle = () => {
    this.props.dispatch(navToggle());
  };

  render () {
    const {
      posts,
      name,
      navOpen
    } = this.props;

    return <div id='viewport'>
      <Router>
        <div>
          <TopNav isOpen={navOpen} name={name}/>
          <main className='container-fluid' role='main'>
            <Route path="/posts" component={Post} />
          </main>
        </div>
      </Router>
    </div>
  }
};

export default connect(selector)(App);
