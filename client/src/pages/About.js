import React from 'react';
import '../App.css';
// import { Parallax } from 'react-scroll-parallax';
// import ScrollAnimation from 'react-animate-on-scroll';
import WorldMap from '../media/worldmap.png';
import Marker from '../media/marker.png';
import LogoPin from '../media/logopin.png';
import Austin from '../media/austin.jpg';
import Anton from '../media/Anton.jpeg';
import AntonQ from '../media/antoine.jpg';
import Hao from '../media/Hao.jpeg';
import Heather from '../media/heather.jpeg';
import Kelly from '../media/kelly.jpeg';
import Liam from '../media/liam.jpeg';
import MarkC from '../media/markc.jpeg';
import Oleg from '../media/Oleg.jpeg';
import Anna from '../media/anna.jpeg';
import Andrii from '../media/andrii.jpeg';
import Sergey from '../media/sergey.jpeg';
import Location from "../media/location.jpg";
import Aaron from "../media/aaron.jpg"


const About = () => {
  return (
    <div>
      <div className="container letsBuild page-header">
        <div className="row ">
          <div className="col-md-12">
            <div className="aboutspace padding">
            <div className="homeheadingcenter">
                Pushing Technology Further <br />
              </div>
              <div class="aboutparagraph">
                <p>Solaris Dev is a full service web design and development agency based in Austin, Texas and our full team is distributed all over the globe. We want to help your organization create beautiful and submersive websites and web apps.</p>
                <p>We created Solaris Dev to help teams reimagine the way they approach web development.  Solaris Dev is here to help you build better websites, web apps, and marketing assets.  We are most effective when working with entrepreneurs, product teams, or marketing teams.
                 We provide horsepower to your organization so that your ideas can come to fruition.  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="austin">
        <div className="col-md-12 austinheadingcenter">
          Headquartered in Austin, TX
        </div>
        <img src={Austin} className="austinimg" alt="worldmap"></img>
      </div>
      <div className="aboutUsDiv">
        <div className="homeheadingcenter">
          We Work Around The Clock
        </div>
        <div className="contactsubheaderclock">
          Our team is spread across 8 timezones which means we are always working.  This is how we provide wicked fast turn-around times for our clients.
        </div>
        <div className="col-md-12 ">
          <img src={WorldMap} className="worldmap" alt="worldmap"></img>
          <img src={LogoPin} className="marker1" alt="marker"></img>
          <img src={Marker} className="marker2" alt="marker"></img>
          <img src={Marker} className="marker3" alt="marker"></img>
          <img src={Marker} className="marker4" alt="marker"></img>
          <img src={Marker} className="marker5" alt="marker"></img>
          <img src={Marker} className="marker6" alt="marker"></img>
          <img src={Marker} className="marker7" alt="marker"></img>
          <img src={Marker} className="marker8" alt="marker"></img>
          <img src={Marker} className="marker9" alt="marker"></img>
        </div>
      </div>
      <div className="container whatWeOfferDiv">
        <div className="row">
          <div className="col-md-12">
            <div className="servicesheader">
              <div className="homeheadingcenter">
                Only The Best
              </div>
              <div className="contactsubheader">
                We've scoured the globe for the best talent.
              </div>
            </div>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Aaron} alt="aaron" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Anton} alt="anton" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={AntonQ} alt="bryan" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Hao} alt="hao" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Heather} alt="alice" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Kelly} alt="anton" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Liam} alt="bryan" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={MarkC} alt="hao" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Oleg} alt="alice" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Anna} alt="anton" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Andrii} alt="bryan" className="team hvr-grow"></img>
          </div>
          <div className="col-md-3 teamcontainer">
            <img src={Sergey} alt="hao" className="team hvr-grow"></img>
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

export default About;