import React, { Component } from 'react';

const Contact = () => (
  <section id="page6">
    <div className="row">
        <div className="col-lg-12">
             <h2 className="heading">Contact</h2>
            <div className="row">
                <div className="col-lg-6">
                    <form id="contact-form" method="post" action="contact.php" className="contact-form">
                        <div className="controls">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Your firstname *</label>
                                        <input type="text" name="name" placeholder="Enter your firstname"
                                        required="required" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="surname">Your lastname *</label>
                                        <input type="text" name="surname" placeholder="Enter your  lastname"
                                        required="required" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="surname">Your email *</label>
                                <input type="email" name="email" placeholder="Enter your  email"
                                required="required" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="surname">Your message for us *</label>
                                <textarea rows="4" name="message" placeholder="Enter your message"
                                required="required" className="form-control"></textarea>
                            </div>
                            <div className="text-center">
                                <input type="submit" name="name" value="Send message" className="btn btn-primary btn-block" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6">
                    <p>Effects present letters inquiry no an removed or friends. Desire behind
                        latter me though in. Supposing shameless am he engrossed up additions.
                        My possible peculiar together to. Desire so better am cannot he up before
                        points. Remember mistaken opinions it pleasure of debating. Court front
                        maids forty if aware their at. Chicken use are pressed removed.</p>
                    <p>Able an hope of body. Any nay shyness article matters own removal nothing
                        his forming. Gay own additions education satisfied the perpetual. If he
                        cause manor happy. Without farther she exposed saw man led. Along on happy
                        could cease green oh.</p>
                    <p className="social"><a href="#" title="" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a
                        href="#" title="" className="twitter"><i className="fa fa-twitter"></i>
                            </a><a href="#" title="" className="gplus"><i className="fa fa-google-plus"></i></a>
                            <a
                            href="#" title="" className="instagram"><i className="fa fa-instagram"></i>
                                </a><a href="#" title="" className="email"><i className="fa fa-envelope"></i></a>
                    </p>
                </div>
            </div>
        </div>
    </div>

  </section>
)

export default Contact;
