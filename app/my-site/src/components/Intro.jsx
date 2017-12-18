import React, { PureComponent } from 'react';
import {connect} from 'react-redux'; 
import bg from '../assets/images/macbook-juice.jpg';

const Intro = ({name}) =>
  <section id="page1" style = {{backgroundImage: 'url(' + bg + ')'}}>
    <div className="overlay"></div>
    <div className="row">
        <div className="col-lg-8 mx-md-auto col-md-12">
            <p className="italic">Oh, hello, nice to meet you!</p>
            <h1>My name is {name}.</h1>
            <p className="italic">This is my website. I made it both to introduce myself and showcase some of my work and interests</p>
            <p className="italic">To make it, I decided to have some fun over-complicate things and make the site using react, docker, and related modern web technologies. Check out (link to code)!</p>
            <div className='filler'></div>
        </div>
    </div>
    <div className="icon faa-float animated"><i className="fa fa-angle-double-down"></i>
    </div>
  </section>


export default Intro;

function mapStateToProps(state) {
  return {
    name: state.get('name')
  }
}

export const IntroContainer = connect(mapStateToProps)(Intro);
