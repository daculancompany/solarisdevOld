import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Footer from  './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Services from "./pages/Services";
import NDA from "./pages/NDA";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Process from "./pages/Process";
import { ParallaxProvider } from 'react-scroll-parallax';
import Applications from "./pages/Applications";
import CMS from './pages/CMS';
import Concierge from './pages/Concierge';
import P2H from './pages/PSDtoHTML';
import P2E from './pages/PSDtoEmail';
import Identity from './pages/Identity';
import TrainMethod from './pages/TrainMethod'
import ElleComm from './pages/ElleComm'
import Talenta from './pages/Talenta'


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (
<ParallaxProvider>
      <Router>
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route exact path="/about" render={() => <About />}/>
            <Route exact path="/contact" render={() => <Contact />}/>
            <Route exact path="/work" render={() => <Work />}/>
            <Route exact path="/services" render={() => <Services />}/>
            <Route exact path="/terms" render={() => <Terms />}/>
            <Route exact path="/nondisclosure" render={() => <NDA />}/>
            <Route exact path="/privacy" render={() => <Privacy />}/>
            <Route exact path="/process" render={() => <Process />}/>
            <Route exact path="/applications" render={() => <Applications />}/>
            <Route exact path="/cms" render={() => <CMS />}/>
            <Route exact path="/concierge" render={() => <Concierge />}/>
            <Route exact path="/psdtohtml" render={() => <P2H />}/>
            <Route exact path="/psdtoemail" render={() => <P2E />}/>
            <Route exact path="/identity" render={() => <Identity />}/>
            <Route exact path="/work/trainmethod" render={() => <TrainMethod />}/>
            <Route exact path="/work/ellecomm" render={() => <ElleComm />}/>
            <Route exact path="/work/talenta" render={() => <Talenta />}/>
          </Switch>
        <Footer/>
        </div>
      </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
