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

import TopNav from './TopNav';
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
      navOpen,
      name,
      navIsOpen,
      name

    } = this.props;

    return <div id='viewport'>
      <Router>
        <div>
          <TopNavContainer isOpen={navIsOpen}/>
          <main className='container-fluid' role='main'>
            <Route path="/posts" component={Post} />
          </main>
        </div>
      </Router>;
  }
);

export default connect(selector)(App);

// }
//   <div>
//     <Router>
//       <div>
//         <TopNavContainer />
//         <main className='container-fluid' role='main'>
//           <Route path="/01-intro" component={IntroContainer} />
//           <Route path="/02-profile" component={Profile} />
//           <Route path="/03-cv" component={Cv} />
//           <Route path="/04-research" component={Research} />
//           <Route path="/05-gallery" component={Gallery} />
//           <Route path="/06-contact" component={Contact} />
//           <Route path="/07-about" component={About} />
//           <Route path="/posts" component={PostContainer} />} />
//         </main>
//       </div>
//     </Router>
//   </div>
// );

// export default App;
