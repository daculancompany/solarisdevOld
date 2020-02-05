import React from 'react';
import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import airtight from "../media//identity/airtight.png";
import austrian from "../media//identity/austrian.jpeg";
import iconic from "../media//identity/iconic.jpeg";
import issa from "../media//identity/issa.jpeg";
import wolfrock from "../media//identity/wolfrock.jpg";
import mwengineering from "../media//identity/mwengineering.png";
import noble from "../media//identity/noble.png";
import northwest from "../media//identity/northwest.png";
import trex from "../media//identity/trex.png";
import wbgx3 from "../media//identity/wbgx3.png";
import ortho from "../media//identity/ortho.png";
import sedeo from "../media//identity/sedeo.jpg"

const Identity = () => {
  return (
    <div>
      <div className="container">
        <div className="workheader2">
          <h1><strong>Logo and Identity</strong></h1>
          <p>Because most of our projects are bound by our non-disclosure agreement, we can only show you a fraction of the hundreds of projects our team has worked on.  We've included a snapshot of some of our logo and identity work below.  If you like what you see, don't be afraid to get in touch!</p>
        </div>
      </div>
      <div className="row identity">
        
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo1" src={trex} alt="ellecomm"></img>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo2" src={austrian} alt="talenta"></img>
          </ScrollAnimation>
        </div>
        </div>
        <div className="row identity">
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo1" src={iconic} alt="ellecomm"></img>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo2" src={issa} alt="talenta"></img>
          </ScrollAnimation>
        </div>
        </div>
        <div className="row identity">
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo1" src={wolfrock} alt="ellecomm"></img>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo2" src={mwengineering} alt="talenta"></img>
          </ScrollAnimation>
        </div>
        </div>
        <div className="row identity">
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo1" src={noble} alt="ellecomm"></img>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo2" src={northwest} alt="talenta"></img>
          </ScrollAnimation>
        </div>
        </div>
        <div className="row identity">
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo1" src={airtight} alt="ellecomm"></img>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo2" src={wbgx3} alt="talenta"></img>
          </ScrollAnimation>
        </div>
        </div>
        <div className="row identity">
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo1" src={ortho} alt="talenta"></img>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 hvr-shrink">
          <ScrollAnimation offset="10" delay="0" animateOnce animateIn="fadeIn">
            <img className="logo2" src={sedeo} alt="talenta"></img>
          </ScrollAnimation>
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

export default Identity;