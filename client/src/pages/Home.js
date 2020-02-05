import React from 'react';
import '../App.css';
import Typing from 'react-typing-animation';
import HeadingImage from "../media/xw5vwxtj9w.png";
import Becky from "../media/becky.jpeg";
import Alain from "../media/alain.jpeg";
import Mark from "../media/mark.jpeg";
import Brice from "../media/brice.jpeg";
// import TrainMethod from "../media/trainmethod.png";
import Creative from "../media/creative.png";
import WebDev from "../media/webdev.png";
import Location from "../media/location.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import Phone from '../media/phone.png';
import Laptop from '../media/laptop.png';
// import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
  return (
    <div>
      <div className="desktop">

        {/* Typewriter Section */}

        <div className="container letsBuild">
          <div className="row padding">
            <div className="col-lg-6">
              <img className="trainmethodimg" src={HeadingImage} alt="HeadingImage"></img>
            </div>
            <div className="col-lg-6">
              <div className="typewriter">
                <span>Let's build</span>
                <Typing loop="true">
                  web apps that delight
                <Typing.Delay ms={1000} />
                  <Typing.Backspace count={22} />
                  creative user experiences
                <Typing.Delay ms={1000} />
                  <Typing.Backspace count={30} />
                  the future of the web
                <Typing.Delay ms={1000} />
                  <Typing.Backspace count={22} />
                  {/* engaging mobile apps
                 <Typing.Delay ms={1000} />
                <Typing.Backspace count={22} /> */}
                </Typing>
                <span>together</span>
              </div>
              <p>Alone we can do so little.  Together we can do so much.</p>
              <a href="/about" class="btn btn-dark btn-lg btnabout" >About Us</a>
              <a href="/contact" class="btn btn-outline-dark btn-lg" >Let's Get Started</a>
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
            <div className="col-lg-4 webdev1">
              <div className="homeheading">
                Part Web Design Agency
          </div>
              <p>We love collaborating with our clients on all things creative.  Need cutting edge UI/UX?  A digital campaign?  A custom app design?  We want to work with you to brings your ideas to life.</p>
            </div>
            <div className="col-lg-4 webdev1">
              <ScrollAnimation offset="0" animateOnce animateIn="bounceInRight">
                <div className="centericon">
                  <img className="creativeimg" src={Creative} alt="webdesign"></img>
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
              <ScrollAnimation offset="0" animateOnce animateIn="bounceInLeft">
                <div className="centericon">
                  <img className="webdevimg" src={WebDev} alt="webdev"></img>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-4 webdev1">
              <div className="homeheading">
                Part Web Development Powerhouse
          </div>
              <p>Don't worry about the coding, we've got you covered.  Our team uses the latest and greatest web development technologies to deliver immersive and responsive products that delight.</p>
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
            <div className="col-md-4 webdev">
              <ScrollAnimation offset="0" delay="0" animateOnce animateIn="fadeIn">
                <div className="cardwidth hvr-grow">
                  <div className="card">
                    <div className="card-header">
                      <h1>Creative</h1>
                    </div>
                    <div className="card-body">
                      Custom Ads <br />
                      Digital Animations <br />
                      Digital Assets <br />
                      Email Templates <br />
                      Digital Strategy <br />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 webdev">
              <ScrollAnimation offset="0" delay="50" animateOnce animateIn="fadeIn">
                <div className="cardwidth hvr-grow">
                  <div className="card">
                    <div className="card-header">
                      <h1>Design </h1>
                    </div>
                    <div className="card-body">
                      UX/UI <br />
                      Wordpress Design<br />
                      Custom Web App Design <br />
                      Custom Mobile App Design <br />
                      E-Commerce Design <br />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 webdev">
              <ScrollAnimation offset="0" delay="100" animateOnce animateIn="fadeIn">
                <div className="cardwidth hvr-grow">
                  <div className="card">
                    <div className="card-header">
                      <h1>Development</h1>
                    </div>
                    <div className="card-body">
                      Marketing Websites <br />
                      Ecommerce Website <br />
                      Wordpress Websites <br />
                      Web Apps <br />
                      iOS Development <br />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="subheader2">
            Take a Look
        </div>
        </div>
        {/* Case Study */}
        <div className="row trainMethodCaseDiv">
          <div className="col-md-12 casestudy">
            <Parallax className="custom-classphone" y={[-30, 0]} >
              <img src={Phone} className="phone" alt="phone"></img>
            </Parallax>
            <Parallax className="custom-classlaptop" y={[0, -30]} >
              <img src={Laptop} className="laptop" alt="laptop"></img>
            </Parallax>
            <div className="casestudydiv">
              Case Study
          <div className="casestudyheader">
                train method<sup>tm</sup>
              </div>
              A cutting edge solution for runners that need training plans.<br /><br />
              <a href="/work/trainmethod" class="btn btn-light btn-lg btnabout" >See More</a>
            </div>
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
            <ScrollAnimation offset="10" animateOnce animateIn="slideInUp">
              <div className="row webdev">
                <div className="col-md-3">
                  <div className="cardwidth2 hvr-grow">
                    <div className="card"><br />
                      <img src={Mark} class="card-img-top" alt="Mark T., CEO"></img>
                      <div className="card-body testimonials">
                        <p>Alain D., Founder<br />
                          Strideleaf</p>
                        <div className="testimonialtext">
                          <p>I came to Solaris Dev looking for help on developing our website and I was amazed by the level of creative service offered.  They came up with ideas I couldn't even dream of!  I highly recommend their services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cardwidth2 hvr-grow">
                    <div className="card"><br />
                      <img src={Alain} class="card-img-top" alt="Alain D., Founder"></img>
                      <div className="card-body testimonials">
                        <p>Mark T., CEO<br />
                          West Hill Manufacturing</p>
                        <div className="testimonialtext">
                          <p>I had an idea for a web app but didn't know how to make it a reality.  The team immediately went to work on flushing out the product and executed beautifully on bringing my idea to fruition.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cardwidth2 hvr-grow">
                    <div className="card"><br />
                      <img src={Becky} class="card-img-top" alt="Becky F., CMO"></img>
                      <div className="card-body testimonials">
                        <p>Becky F., CMO<br />
                          Funtrek Adventures</p>
                        <div className="testimonialtext">
                          <p>We needed a marketing website that stood out from the competition but didn't have the in-house talent to get the job done.  The process of working with Solaris was so smooth it was as if we were working side by side!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cardwidth2 hvr-grow">
                    <div className="card"><br />
                      <img src={Brice} class="card-img-top" alt="Brice P., CTO"></img>
                      <div className="card-body testimonials">
                        <p>Brice P., CTO<br />
                          Onecast Group</p>
                        <div className="testimonialtext">
                          <p>I was thoroughly impressed with my experience.  When it comes to implementation, Solaris Dev came through in spades.  </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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
      
      <div className="mobile">

        {/* Typewriter Section */}

        <div className="container letsBuild">
          <div className="row padding">
            <div className="col-lg-6">
              <img className="trainmethodimg" src={HeadingImage} alt="HeadingImage"></img>
            </div>
            <div className="col-lg-6">
              <div className="typewriter">
                <span>Let's build</span>
                <Typing loop="true">
                  web apps that delight
                <Typing.Delay ms={1000} />
                  <Typing.Backspace count={22} />
                  creative user experiences
                <Typing.Delay ms={1000} />
                  <Typing.Backspace count={30} />
                  the future of the web
                <Typing.Delay ms={1000} />
                  <Typing.Backspace count={22} />
                  {/* engaging mobile apps
                 <Typing.Delay ms={1000} />
                <Typing.Backspace count={22} /> */}
                </Typing>
                <span>together</span>
              </div>
              <p>Alone we can do so little.  Together we can do so much.</p>
              <a href="/about" class="btn btn-dark btn-lg btnabout" >About Us</a><br /><br />
              <a href="/contact" class="btn btn-outline-dark btn-lg" >Let's Get Started</a>
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
            <div className="col-lg-4 webdev1">
              <ScrollAnimation offset="0" animateOnce animateIn="bounceInRight">
                <div className="centericon">
                  <img className="creativeimg" src={Creative} alt="webdesign"></img>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-4 webdev1">
              <div className="homeheading">
                Part Web Design Agency
          </div>
              <p>We love collaborating with our clients on all things creative.  Need cutting edge UI/UX?  A digital campaign?  A custom app design?  We want to work with you to brings your ideas to life.</p>
            </div>
            
            <div className="col-lg-2"></div>
          </div>
          {/* End of Container */}
          <div className="row">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-4 webdev1">
              <ScrollAnimation offset="0" animateOnce animateIn="bounceInLeft">
                <div className="centericon">
                  <img className="webdevimg" src={WebDev} alt="webdevelopment"></img>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-4 webdev1">
              <div className="homeheading">
                Part Web Development Powerhouse
          </div>
              <p>Don't worry about the coding, we've got you covered.  Our team uses the latest and greatest web development technologies to deliver immersive and responsive products that delight.</p>
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
            <div className="col-md-4 webdev">
              <ScrollAnimation offset="0" delay="0" animateOnce animateIn="fadeIn">
                <div className="cardwidth">
                  <div className="card text-center">
                    <div className="card-header">
                      <h1>Creative</h1>
                    </div>
                    <div className="card-body">
                      Custom Ads <br />
                      Digital Animations <br />
                      Digital Assets <br />
                      Email Templates <br />
                      Digital Strategy <br />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 webdev">
              <ScrollAnimation offset="0" delay="50" animateOnce animateIn="fadeIn">
                <div className="cardwidth">
                  <div className="card text-center">
                    <div className="card-header">
                      <h1>Design </h1>
                    </div>
                    <div className="card-body">
                      UX/UI <br />
                      Wordpress Design<br />
                      Custom Web App Design <br />
                      Custom Mobile App Design <br />
                      E-Commerce Design <br />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 webdev">
              <ScrollAnimation offset="0" delay="100" animateOnce animateIn="fadeIn">
                <div className="cardwidth">
                  <div className="card text-center">
                    <div className="card-header">
                      <h1>Development</h1>
                    </div>
                    <div className="card-body">
                      Marketing Websites <br />
                      Ecommerce Website <br />
                      Wordpress Websites <br />
                      Web Apps <br />
                      iOS Development <br />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="subheader2">
            Take a Look
        </div>
        </div>
        {/* Case Study */}
        <div className="row trainMethodCaseDiv">
          <div className="col-md-12">
            <div className="casestudymobile">
              Case Study
              <div className="casestudyheader">
                train method<sup>tm</sup>
              </div>
              A cutting edge solution for runners that need training plans.<br /><br />
              <a href="/work/trainmethod" class="btn btn-light btn-lg btnabout" >See More</a>
            </div>
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
            <ScrollAnimation offset="10" animateOnce animateIn="slideInUp">
              <div className="row webdev">
                <div className="col-md-3">
                  <div className="cardwidth2">
                    <div className="card text-center"><br />
                      <img src={Mark} class="card-img-top" alt="Mark T., CEO"></img>
                      <div className="card-body testimonials">
                        <p>Alain D., Founder<br />
                          Strideleaf</p>
                        <div className="testimonialtext">
                          <p>I came to Solaris Dev looking for help on developing our website and I was amazed by the level of creative service offered.  They came up with ideas I couldn't even dream of!  I highly recommend their services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cardwidth2">
                    <div className="card text-center"><br />
                      <img src={Alain} class="card-img-top" alt="Alain D., Founder"></img>
                      <div className="card-body testimonials">
                        <p>Mark T., CEO<br />
                          West Hill Manufacturing</p>
                        <div className="testimonialtext">
                          <p>I had an idea for a web app but didn't know how to make it a reality.  The team immediately went to work on flushing out the product and executed beautifully on bringing my idea to fruition.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cardwidth2">
                    <div className="card text-center"><br />
                      <img src={Becky} class="card-img-top" alt="Becky F., CMO"></img>
                      <div className="card-body testimonials">
                        <p>Becky F., CMO<br />
                          Funtrek Adventures</p>
                        <div className="testimonialtext">
                          <p>We needed a marketing website that stood out from the competition but didn't have the in-house talent to get the job done.  The process of working with Solaris was so smooth it was as if we were working side by side!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cardwidth2">
                    <div className="card text-center"><br />
                      <img src={Brice} class="card-img-top" alt="Brice P., CTO"></img>
                      <div className="card-body testimonials">
                        <p>Brice P., CTO<br />
                          Onecast Group</p>
                        <div className="testimonialtext">
                          <p>I was thoroughly impressed with my experience.  When it comes to implementation, Solaris Dev came through in spades.  </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Contact Section */}
        <div className="homeContact contactSectionDiv ">
          <div className="homeheadingcenter">
            Contact
        </div>
          <div className="contactsubheadermobile">
            Let's talk.  We want to work with you on your next project.
        </div>
          <div className="container contactpadding">
            <div className="row">
              <div className="col-lg-3">
                <div className="location">
                  <div className="locationimg">
                    <img src={Location} alt="Location" className="locationimg"></img><br />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="companynamefooter">
                <br />
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
      

    </div>

    





  );
}

export default Home;