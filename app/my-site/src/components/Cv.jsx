import React, { Component } from 'react';
import Link from 'react-router-dom';

// Would be nice to highlight skills/ interests and have them expand on click?
const Cv = () => (
<section id="page3" className="section-gray">
  <div className="row services">
      <div className="col-lg-12">
         <h2 className="heading">Overview of CV</h2>
          <div className="row">
              <div className="col-md-4">
                  <div className="box">
                      <div className="icon"><i className="fa fa-desktop"></i>
                      </div>
                       <h4 className="heading">Webdesign</h4>
                      <p>Fifth abundantly made Give sixth hath. Cattle creature i be don&apos;t
                          them.</p>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="box">
                      <div className="icon"><i className="fa fa-print"></i>
                      </div>
                       <h4 className="heading">Print</h4>
                      <p>Advantage old had otherwise sincerity dependent additions. It in adapted
                          natural.</p>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="box">
                      <div className="icon"><i className="fa fa-globe"></i>
                      </div>
                       <h4 className="heading">SEO and SEM</h4>
                      <p>Am terminated it excellence invitation projection as. She graceful shy.</p>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-4">
                  <div className="box">
                      <div className="icon"><i className="fa fa-lightbulb-o"></i>
                      </div>
                       <h4 className="heading">Consulting</h4>
                      <p>Fifth abundantly made Give sixth hath. Cattle creature i be don&apos;t
                          them.</p>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="box">
                      <div className="icon"><i className="fa fa-envelope-o"></i>
                      </div>
                       <h4 className="heading">Email Marketing</h4>
                      <p>Advantage old had otherwise sincerity dependent additions. It in adapted
                          natural.</p>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="box">
                      <div className="icon"><i className="fa fa-user"></i>
                      </div>
                       <h4 className="heading">UX &amp; UI</h4>
                      <p>Am terminated it excellence invitation projection as. She graceful shy.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <h3><a href=''>Link To CV</a></h3>
</section>
)

export default Cv;
