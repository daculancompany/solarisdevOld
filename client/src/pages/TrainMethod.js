import React from 'react';
import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Location from "../media/location.jpg";
import TrainMethodScreen from "../media/trainmethodscreen.png";
import TMAbout from "../media/tmabout.png";
import TMSetup from "../media/tmsetup.png";
import TMCalendar from "../media/tmcalendar.png";
import TMPhone from "../media/tmphone.png";
import ThreePage from "../media/tmthreepage.png";
import TMTriplet from "../media/tmtriplet.png";

const TrainMethod = () => {
  return (
    <div>
      <div className="container letsBuild">
        <div className="row padding">
          <div className="col-lg-2">

          </div>
          <div className="col-lg-8">
            <div className="homeheadingcenter">
              <ScrollAnimation offset="10" animateOnce animateIn="slideInUp">
                Train Method <br />
              </ScrollAnimation>
            </div>
            <div className="contactsubheaderwork">
              <ScrollAnimation offset="10" animateOnce animateIn="slideInUp">
                <p>Custom Application</p>
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-lg-2">

          </div>
          <div className="col-lg-1">

          </div>
          <div className="col-md-10">
            <ScrollAnimation offset="10" animateOnce animateIn="slideInUp">
              <img src={TrainMethodScreen} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img>
            </ScrollAnimation>
          </div>
          <div className="col-lg-1">
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="section1 aboutUsDiv">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-8">
              <div className="homeheadingcenter">
                <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                  The Ask
              </ScrollAnimation>
              </div>
              <div className="contactsubheaderwork">
                <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                  Train Method is a web app that generates dynamic training plans for runners.  The app started out as an idea and needed to be built from the ground up.  This custom application required a complex and robust back end and a slick UI on the front end.
<br />At the heart of Train Method is an algorithm that uses data from hundreds of training programs made by professional running coaches and distills those data points into a universal method.  After a user fills out a short form, the algorithm calculates the ideal training plan for that user and displays it on a calendar that’s both beautiful and easy to read.  It was a monumental task but Solaris Dev was up for it.
<br /><br />
                </ScrollAnimation>
              </div>
            </div>
            <div className="col-lg-2"></div>

            <div className="col-md-4 tmiphone">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                <img src={TMAbout} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 tmiphone">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                <img src={TMSetup} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 tmiphone">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                <img src={TMCalendar} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img><br />
              </ScrollAnimation>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4 tmiphone">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                <img src={TMPhone} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img>
              </ScrollAnimation>
            </div>
            <div className="col-md-4"></div>
          </div>
          {/* End of Container */}
          <div className="row">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-8 webdev1">

            </div>

            <div className="col-lg-2">
            </div>
          </div>
        </div>
      </div>
      {/* What We Offer Section */}
      <div className="container whatWeOfferDiv">
        <div className="row">
          <div className="col-md-2 webdev">
          </div>
          <div className="col-md-8 webdev">
            <div className="homeheadingcenter">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                The Build
              </ScrollAnimation>
            </div>
            <div className="contactsubheaderwork">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                Train Method needed every aspect of their application built from scratch.  Solaris Dev decided on a progressive tech stack that includes React.js, Express.js, MySQL, and a handful of other technologies that blend together seamlessly.  <br />
                Each user’s account details and training plans are kept within a secure database.  This required building two brand new API’s from scratch.  <br />
                The algorithm itself is both elegant and robust.  Our back-end team continually and thoughtfully refined the algorithm while our front end team worked feverishly to flush out the UI.  All the while, our full-stack developers worked to make sure both the front-end and back-end functioned flawlessly. <br /><br />
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-md-2 webdev">
          </div>
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
            <img src={TMTriplet} alt="trainmethodscreenshot" className="trainmethodscreenshot tmiphone"></img><br />
          </ScrollAnimation>
        </div>
      </div>
      {/* Case Study */}
      <div className=" purpleCaseDiv">
        <div className="row">
          <div className="col-md-12">
            <div className="servicesheader">
            </div>
          </div>
          <div className="col-md-2 webdev">
          </div>
          <div className="col-md-8 webdev">
            <div className="homeheadingcenter">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                The Win
              </ScrollAnimation>
            </div>
            <div className="contactsubheaderwork">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
                Train Method is by far and above the most advanced training plan software on the market.  The app is widely used and the technology has proven to be disruptive.  It’s simple to use and the product is a tremendously valuable resource for runners.  <br />
                The app went from an idea to MVP in 10 business days and to final product in just another week.  There’s no time to wait around when building a web app for your company.  You can trust the team at Solaris Dev to bring your app to market expeditiously and with perfect execution.
</ScrollAnimation>
            </div>

          </div>
          <div className="col-md-2 webdev">

          </div>
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
            <img src={ThreePage} alt="trainmethodscreenshot" className="trainmethodscreenshot tmiphone"></img><br />
          </ScrollAnimation>
          
        </div>
        <div className="homeheadingcenterlink">
          <a href="/work" className="homeheadingcenterlink"> See More Work</a>
        </div>

      </div>

      {/* Testimonials */}

      

      {/* Contact Section */}
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

export default TrainMethod;