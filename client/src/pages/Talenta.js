import React from 'react';
import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import TalentaHome from "../media/talentahome.png";
import TalentaImac from "../media/talentaimac.png";
import TalentaIphone from "../media/talentaiphone.png";
import TalentaTriplet from "../media/talentatriplet.png";


const Talenta = () => {
  return (
    <div>
       <div className="container letsBuild">
        <div className="row padding">
          <div className="col-lg-2">
            
          </div>
          <div className="col-lg-8">
          <div className="homeheadingcenter">
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
              Talenta Global
              </ScrollAnimation>
              </div>
              <div className="contactsubheader">
              <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
              <p>PSD to HTML</p>
              </ScrollAnimation>
              </div>
            
          </div>
          <div className="col-lg-2">
            
          </div>
          <div className="col-lg-1">
            
          </div>
          <div className="col-md-10">
          <ScrollAnimation offset="10" animateOnce animateIn="slideInUp">
          <img src={TalentaHome} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img>
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
              Talenta Global is recruiting firm that pairs top level talent with technology giants like Google, Xerox, Dell, and Accenture.  As such, they needed to refresh their website to look the part.  They wanted a custom web design that was bold and aesthetically pleasing.  The design needed to appeal to both recruiters and recruitees.  Solaris Dev was up for the challenge.
              </ScrollAnimation>
              </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4 tmiphone">
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
          <img src={TalentaIphone} alt="trainmethodscreenshot" className="trainmethodscreenshot"></img>
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
              Talenta’s redesign was a perfect candidate for PSD to HTML.  Solaris Dev tapped their in-house design talent to craft a beautiful UI that was stylish and content-rich.  After our designers crafted pixel-perfect PSD files, our front-end developers went to work translating the design to clean and easy to maintain HTML and CSS.  
</ScrollAnimation>
              </div>
          </div>
          <div className="col-md-2 webdev">
            
          </div>
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
          <img src={TalentaTriplet} alt="trainmethodscreenshot" className="trainmethodscreenshot tmiphone"></img><br />
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
              Project assets were delivered in less than 10 business days from the initial meeting.  Utilizing a dynamic team of designers, developers, and project managers spread across 3 time zones, Solaris Dev worked around the clock to complete the project.  Now, Talenta Global’s website will last them for years to come.  
</ScrollAnimation>
              </div>
          
          </div>
          <div className="col-md-2 webdev">
            
          </div>
          <ScrollAnimation offset="0" animateOnce animateIn="slideInUp">
          <img src={TalentaImac} alt="trainmethodscreenshot" className="trainmethodscreenshot tmiphone"></img><br />
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

export default Talenta;