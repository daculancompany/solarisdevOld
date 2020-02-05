import React from 'react';
import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Location from "../media/location.jpg";
import ElleScreenCap from "../media/ellescreencap.png";
import ElleImac from "../media/elleimac.png"
import ElleTriplet from "../media/elletriplet.png";
import ElleIphone from "../media/elleiphone.png"

// import ScrollAnimation from 'react-animate-on-scroll';

const ElleComm = () => {
  return (
    <div>
       <div className="container letsBuild">
        <div className="row padding">
          <div className="col-lg-2">
            
          </div>
          <div className="col-lg-8">
          <div className="homeheadingcenter">
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
              Elle Comm
              </ScrollAnimation>
              </div>
              <div className="contactsubheader">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
              <p>CMS Development</p>
              </ScrollAnimation>
              </div>
            
          </div>
          <div className="col-lg-2">
            
          </div>
          <div className="col-lg-1">
            
          </div>
          <div className="col-md-10">
          <ScrollAnimation offset="10" animateOnce animateIn="slideInUp">
          <img src={ElleScreenCap} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img>
          </ScrollAnimation>
          </div>
          <div className="col-lg-1">
            
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="section1 aboutUsDiv">
      
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-8">
          <div className="homeheadingcenter">
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
              The Ask
              </ScrollAnimation>
              </div>
              <div className="contactsubheader">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
              Sometimes, less is more.  In the case of Elle Comm, their a-list clientele does the talking for them.  They wanted to ditch their 20+ page website for just one elegant page that signaled to their prospective clients that Elle Comm is an industry leader in their segment. The challenge was to build a concise and minimal marketing site that was appealing to the eye and easy for their in-house team to maintain.  
</ScrollAnimation>
              </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4 tmiphone">
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
          <img src={ElleIphone} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img>
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
      {/* What We Offer Section */}
      <div className="container whatWeOfferDiv">
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
              The Build
              </ScrollAnimation>
              </div>
              <div className="contactsubheader">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
              When a marketing website is just one page, every detail needs to be absolutely perfect.  The logo, social icons, and descriptive paragraph needed to be on point.  
In addition to a minimal UI, Elle Comm needed a CMS platform behind the scenes that allowed them to dynamically update and refresh the background pictures on their site.  Solaris Dev built a Wordpress site for Elle Comm with a custom plugin that allows them to do just that.  
</ScrollAnimation>
              </div>
          </div>
          <div className="col-md-2 webdev">
            
          </div>
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
          <img src={ElleTriplet} alt="trainmethodscreenshot" className="trainmethodscreenshot tmiphone"></img><br />
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
              <div className="contactsubheader">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
              Elle Comm’s website now displays their celebrity clientele in a subtle yet visually appealing way without the clutter of 20 pages of copy.  As Elle Comm continues to amass more a-list clientele, they can add pictures of their new clients via their CMS.  Solaris Dev always puts the needs of their customers first and executes with conviction and precision.  
</ScrollAnimation>
              </div>
          
          </div>
          <div className="col-md-2 webdev">
            
          </div>
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
          <img src={ElleImac} alt="trainmethodscreenshot" className="trainmethodscreenshot tmiphone"></img><br />
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


export default ElleComm;