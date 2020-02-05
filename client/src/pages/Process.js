import React from 'react';
import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Location from "../media/location.jpg";
import Quote from '../media/quote.png';
import Approval from '../media/approval.png';
import Coding from '../media/coding.png';
import QA from '../media/qa.png';
import Review from '../media/revision.png';
import Final from '../media/final.png';

// import ScrollAnimation from 'react-animate-on-scroll';
// import Slider from "react-slick";
// var settings = {
//   dots: true
// };
const Process = () => {
  return (
    <div>
      <div className="container letsBuild">
        <div className="row padding">
          <div className="col-lg-12">
            <div className="homeheadingcenter">
              Our Process <br />
        </div>
            <div className="contactsubheader">
              Take a look at our systematic approach to customer satisfaction<br /><br /><br />
        </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="section1 aboutUsDiv desktop">

        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              Discovery &amp; Quote
          </div>
            <p>You give us as much detail as possible about what you need, either over the phone, in live chat, or via email. Our team of expert developers and designers will quickly review it and get back to you.</p>
          </div>
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInRight">
              <div className="centericon">
                <img className="processimg" src={Quote} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-2"></div>
        </div>
        {/* End of Container */}
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInLeft">
              <div className="centericon">
                <img className="processimg" src={Approval} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              Project Brief Approval
          </div>
            <p>After we understand the full scope of your project, we package it into one of our many development briefs. Each one of our services has a specific development brief that outlines the scope of the project. You will receive a development brief in your client portal, along with an invoice and guaranteed delivery date. To kick off your project, all you have to do is approve the developer brief!</p>
          </div>
          <div className="col-lg-2">
          </div>
        </div>
      

        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              Design &amp; Coding
          </div>
            <p>This is where the real work happens. Our team of expert developers and designers work according to the development brief we outlined in the previous step.</p>
          </div>
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInRight">
              <div className="centericon">
                <img className="processimg" src={Coding} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-2"></div>
        </div>
        {/* End of Container */}
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInLeft">
              <div className="centericon">
                <img className="processimg" src={QA} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              QA &amp; Testing
          </div>
            <p>Our developers hand off the the first version of the project to our Quality Assurance engineers who ensure that the code is pixel perfect, and that no details were missed from the development brief.</p>
          </div>
          <div className="col-lg-2">
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              Client Review &amp; Revision
          </div>
            <p>You will get a notification when your project is ready for you to review. Each project includes 1 free round of revision, so if you forgot something, don't worry, just let us know in the revision round.</p>
          </div>
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInRight">
              <div className="centericon">
                <img className="processimg" src={Review} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-2"></div>
        </div>
        {/* End of Container */}
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-8 webdev1">
            <div className="homeheadingcenter">
              <img className="processimg" src={Final} alt="trainmethod"></img><br />
              Final Project Assets Delivered
          </div>
            <div className="servicesheader">
              <p>All of your finalized project assets will be delivered through your client dashboard.</p>
            </div>
          </div>
          <div className="col-lg-2">
          </div>
        </div>

      </div>
      <div className="section1 aboutUsDiv mobile">

        <div className="row">
          <div className="col-lg-2">
          </div>
          
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInRight">
              <div className="centericon">
                <img className="processimg" src={Quote} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              Discovery &amp; Quote
          </div>
            <p>You give us as much detail as possible about what you need, either over the phone, in live chat, or via email. Our team of expert developers and designers will quickly review it and get back to you.</p>
          </div>
          <div className="col-lg-2"></div>
        </div>
        {/* End of Container */}
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInLeft">
              <div className="centericon">
                <img className="processimg" src={Approval} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              Project Brief Approval
          </div>
            <p>After we understand the full scope of your project, we package it into one of our many development briefs. Each one of our services has a specific development brief that outlines the scope of the project. You will receive a development brief in your client portal, along with an invoice and guaranteed delivery date. To kick off your project, all you have to do is approve the developer brief!</p>
          </div>
          <div className="col-lg-2">
          </div>
        </div>
      

        <div className="row">
          <div className="col-lg-2">
          </div>
          
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInRight">
              <div className="centericon">
                <img className="processimg" src={Coding} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              Design &amp; Coding
          </div>
            <p>This is where the real work happens. Our team of expert developers and designers work according to the development brief we outlined in the previous step.</p>
          </div>
          <div className="col-lg-2"></div>
        </div>
        {/* End of Container */}
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInLeft">
              <div className="centericon">
                <img className="processimg" src={QA} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              QA &amp; Testing
          </div>
            <p>Our developers hand off the the first version of the project to our Quality Assurance engineers who ensure that the code is pixel perfect, and that no details were missed from the development brief.</p>
          </div>
          <div className="col-lg-2">
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
          </div>
          
          <div className="col-lg-4 webdev1">
            <ScrollAnimation offset="10" animateOnce animateIn="bounceInRight">
              <div className="centericon">
                <img className="processimg" src={Review} alt="trainmethod"></img>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 webdev1">
            <div className="homeheading">
              Client Review &amp; Revision
          </div>
            <p>You will get a notification when your project is ready for you to review. Each project includes 1 free round of revision, so if you forgot something, don't worry, just let us know in the revision round.</p>
          </div>
          <div className="col-lg-2"></div>
        </div>
        {/* End of Container */}
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-8 webdev1">
            <div className="homeheadingcenter">
              <img className="processimg" src={Final} alt="trainmethod"></img><br />
              Final Project Assets Delivered
          </div>
            <div className="servicesheader">
              <p>All of your finalized project assets will be delivered through your client dashboard.</p>
            </div>
          </div>
          <div className="col-lg-2">
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

export default Process;