// import React from './node_modules/react';
import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import Logo from '../media/solarislogofooter.png';

const Footer = (props) => {
  return (
    <div>
      <footer>
        <div className="row desktop">
          <div className="col-md-5">
            <a href="/" className="navbar-brand d-flex w-50 mr-auto center"><img className="logoimg" src={Logo} alt="logo" /></a>
          </div>
          <div className="col-md-2">
            <h5><strong>Navigation</strong></h5><br />
            <div className="footerList">
              <a href="/about">About</a><br /><br />
              <a href="/work">Work</a><br /><br />
              <a href="/process">Process</a><br /><br />
              <a href="/contact">Contact</a><br /><br />
            </div>
          </div>
          <div className="col-md-2">
            <h5><strong>Helpful Links</strong></h5><br />
            <div className="footerList">
              <a href="/terms">Terms of Service</a><br /><br />
              <a href="/privacy">Privacy Policy</a><br /><br />
              <a href="/nondisclosure">NDA</a><br /><br />
              <a href="/contact">Support</a><br /><br />
            </div>
          </div>
          <div className="col-md-3">
            <h5><strong>Live Chat</strong></h5><br />
            <div className="livechat">
              <a>Talk to one of our project managers for assistance by contacting us via chat in the lower right corner of your screen.</a><br />
            </div>
            <br />
          </div>
        </div>
        
        
        <div className="row mobile">
          <div className="col-md-5">
            <a href="/" className="navbar-brand d-flex w-50 mr-auto center"><img className="logoimg" src={Logo} alt="logo" /></a><br />
          </div>
          <div className="col-md-2">
            <h5><strong>Navigation</strong></h5>
            <div className="footerList">
              <a href="/about">About</a><br />
              <a href="/work">Work</a><br />
              <a href="/process">Process</a><br /><br />
            </div>
          </div>
          <div className="col-md-2">
            <h5><strong>Helpful Links</strong></h5>
            <div className="footerList">
              <a href="/terms">Terms of Service</a><br />
              <a href="/privacy">Privacy Policy</a><br />
              <a href="/nondisclosure">NDA</a><br />
              <a href="/contact">Support</a><br /><br />
            </div>
          </div>
          <div className="col-md-3">
            <h5><strong>Live Chat</strong></h5>
            <div className="livechat">
              <a>Talk to one of our project managers for assistance by contacting us via chat in the lower right corner of your screen.</a><br />
            </div>
            <br />
          </div>
        </div>
      </footer>
      <div className="row copyrightdiv">
          <div className="col-md-12">
            <div className="copyright">
            &copy; Copyright 2020 Solaris Dev
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;