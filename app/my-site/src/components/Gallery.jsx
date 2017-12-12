import React, { Component } from 'react';
import p1 from '../assets/images/portfolio-1.jpg'
import p2 from '../assets/images/portfolio-2.jpg'
import p3 from '../assets/images/portfolio-3.jpg'
import p4 from '../assets/images/portfolio-4.jpg'
import p5 from '../assets/images/portfolio-5.jpg'
import p6 from '../assets/images/portfolio-6.jpg'

const Gallery = () => (
  <section id="page4">
    <div className="row">
        <div className="col-lg-12">
             <h2 className="heading">Portfolio</h2>
            <p className="text-center">Highlights for Project</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="box"><a href="#" title=""><img src={p1} alt="" className="img-fluid" /></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box"><a href="#" title=""><img src={p2} alt="" className="img-fluid" /></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box"><a href="#" title=""><img src={p3} alt="" className="img-fluid" /></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="box"><a href="#" title=""><img src={p4} alt="" className="img-fluid" /></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box"><a href="#" title=""><img src={p5} alt="" className="img-fluid" /></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box"><a href="#" title=""><img src={p6} alt="" className="img-fluid" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </section>
)

export default Gallery;
