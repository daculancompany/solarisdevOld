import React from 'react';
import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Portfolio = () => {
  return (
    <div>
      <div className="container">
        <div className="aboutspace padding">
        <div className="homeheadingcenter">
        <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
          <strong>Our Work</strong>
          </ScrollAnimation>
          </div>
          <div>
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
            <div className="aboutparagraph">
          <p>Because most of our projects are bound by our non-disclosure agreement, we can only show you a fraction of the hundreds of projects our team has worked on.  We've included a snapshot of some of our work below.  If you like what you see, don't be afraid to get in touch!</p>
          </div>
          </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="row portfolio">
        <div className="col-md-12">
        <a href="/work/trainmethod">
          <div className="containertrain">
            <div class="button">See Details <i class="fa fa-arrow-circle-right"></i></div>
          </div>
          </a>
          <br />
        </div>
        <div className="col-md-6">
        <a href="/work/ellecomm">
          <div className="containerelle">
            {/* <p class="title">
            Elle Communications
          </p> */}
           <div class="button">See Details <i class="fa fa-arrow-circle-right"></i></div>
          </div>
          </a>
        </div>
        <div className="col-md-6">
        <a href="/work/talenta">
          <div className="containertalenta">
            {/* <p class="title">
            Talenta Global
          </p> */}
            <div class="button">See Details <i class="fa fa-arrow-circle-right"></i></div>
          </div>
          </a>
        </div>
        <div className="col-md-12">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <div className="workcontact">
              <h1><strong>Get in Touch</strong></h1>
              <h5><strong>Like what you see?  We should work together.  Send us a message to get things started.</strong></h5><br />
              <a href="/contact" class="btn btn-light" >Let's Talk</a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;