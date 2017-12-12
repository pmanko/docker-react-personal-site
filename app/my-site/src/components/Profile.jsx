import React, { Component } from 'react';
import ProfilePic from '../assets/images/about.jpg';

const Profile = () => (
  <section id="page2">
    <div className="row">
        <div className="col-lg-6">
             <h2 className="heading">About me</h2>
            <p className="lead">Here's a quick profile of me.</p>
            <p>I'm a PhD Student etc etc.</p>
            <p>Delightful unreserved impossible few estimating men favourable see entreaties.
                She propriety immediate was improving. He or entrance humoured likewise
                moderate. Much nor game son say feel. Fat make met can must form into gate.
                Me we offending prevailed discovery.</p>
        </div>
        <div className="col-lg-5 mx-md-auto">
            <p>
                <img src={ProfilePic} alt="" className="img-fluid rounded-circle" />
            </p>
        </div>
    </div>
  </section>
)


export default Profile;
