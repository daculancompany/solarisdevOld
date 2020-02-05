import React from 'react';
import '../App.css';
// import ScrollAnimation from 'react-animate-on-scroll';
// import Quote from 
import Location from "../media/location.jpg";
import Slider from "react-slick";
var settings = {
  dots: true
};
const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="row letsBuild">
          <div className="col-md-12">
          <div className="homeheadingcenter">
              Services
              </div>
              <div class="aboutparagraph">
              <p>Our team of designers and developers are tenured and have an average of 11 years of experience.  When you work with us, you're electing to collaborate with industry leaders that are dedicated to making your ideas a reality.  Think of us as the design and/or engineering arm of your business.</p>
              </div>
          </div>
          <div className="col-md-4">
            <ul>
              <li> <h1>Creative</h1></li>

              <li>Custom Ads </li>
              <li>Digital Animations </li>
              <li>Digital Assets </li>
              <li>Email Templates </li>
              <li>Digital Strategy </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li> <h1>Design</h1></li>

              <li>UX/UI </li>
              <li>Wordpress Design</li>
              <li>Custom Web App Design</li>
              <li>Custom Mobile App Design </li>
              <li>E-Commerce Design </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li><h1>Development</h1> </li>

              <li> Marketing Websites </li>
              <li>Web Apps </li>
              <li>Android Development </li>
              <li>iOS Development </li>
            </ul>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-6">
            <div className="language">
              We Speak Your Language
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>HTML/CSS </li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>Ruby</li>
              <li>Python</li>
              <li>React.js</li>
              <li>React Native</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </div>
        </div> */}
        
      </div>
      <div className="aboutUsDiv">
      <div className="homeheadingcenter">
          Our Process
        </div>
        <div className="contactsubheader">
          What you can expect when you work with us.
        </div>
        <div className="processType">
{/* render () {
  const process = <div>
    <Process processType={BRIEF} />
  </div>
} */}
        </div>
      <div className="nav2 navbar navbar-light navbar-expand-md bg-faded justify-content-center">
        <div className="navbar-nav w-100 justify-content-center">
        <Slider {...settings}>
            <div >
              <h1>Quote</h1>
                
            </div>
            <div >
              <h1>Brief</h1>
                
            </div>
            <div >
               <h1>Coding</h1>
            </div>
            <div >
                <h1>QA</h1>
            </div>
            <div >
                <h1>Revision</h1>
            </div>
            <div >
                <a class="nav-link" href="/work"><h5>Production</h5></a>
            </div>
            </Slider>
        </div>
        </div>
   
        </div>
        <div className="homeContact contactSectionDiv ">
        <div className="homeheadingcenter">
          Contact
        </div>
        <div className="contactsubheader">
        Let's talk.  We want to work with you on your next project.
        </div>
        
       
        <div className="container contactpadding">
          <div className="row">
            <div className="col-lg-3">
            <div className="location">
                <div className="locationimg hvr-grow">
                  <img src={Location} alt="Location" className="locationimg"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div className="companynamefooter">
            Solaris Dev <br />
            </div>
            <div className="location">
              360 Nueces St <br />
              Austin, TX 78701 <br />
              512-560-5018 <br />
              team@solaris-dev.com
              </div>
            </div>
            <div className="col-lg-6">
            <div className="contactsubheader2">
                Solaris Dev is based in Austin, Texas but our team is distributed all over the globe.  We want to help you create beautiful and submersive websites and web apps.  Reach out today to get things started.  <br /><br />
                <div className="contactdiv">
                  
          </div>
                
                <a href="/contact" class="btn btn-dark btn-lg btnabout" >Get a Quote</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;