import React from 'react';
import '../App.css';
// import ScrollAnimation from 'react-animate-on-scroll';

const Applications = () => {
  return (
    <div>
       <div className="container letsBuild">
        <div className="row padding">
          <div className="col-lg-2">
            
          </div>
          <div className="col-lg-8">
            
            
          </div>
          <div className="col-lg-2">
            
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="section1 aboutUsDiv">
        <div className="homeheadingcenter">
          About Us
        </div>
        <div className="contactsubheader">
          Solaris Dev is a team of creatives and developers that work together in harmony.
        </div>
        <div className="row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-8"></div>
          <div className="col-lg-2"></div>
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
              <div className="homeheadingcenter">
                What We Offer
              </div>
              <div className="contactsubheader">
                We bring expertise to the table.  Trust us, you're in good hands.
              </div>
            </div>
          </div>
          <div className="col-md-2 webdev">
            
          </div>
          <div className="col-md-8 webdev">
            
          </div>
          <div className="col-md-2 webdev">
            
          </div>
        </div>
        
      </div>
      {/* Case Study */}
      <div className="row trainMethodCaseDiv">
        <div className="col-md-2 casestudy">
        <div className="col-md-8 casestudy">
          
          
          </div>
          
        </div>
        <div className="col-md-2 casestudy">
          
          
        </div>
      </div>

      {/* Testimonials */}

      <div className="testimonialsDiv">
        <div className="homeheadingcenter">
          We Want to Work With You
        </div>
        <div className="contactsubheader">
          See what our customers are saying about us...
        </div>
        <div className="container">
         
            <div className="row webdev">
              <div className="col-md-2">
                
              </div>
              <div className="col-md-8">
                
              </div>
              <div className="col-md-2">
                
              </div>
              
            </div>
          
        </div>
      </div>

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

export default Applications;