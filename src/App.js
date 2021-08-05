import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Frontend from './components/pages/Frontend';
import Fullstack from './components/pages/Fullstack';
import Calendar from './mini-apps/calendarApp/Calendar';
import BBapiApp from './mini-apps/BBAPI/BbapiApp';
import Automation from './components/pages/Automation';
import Footer from './components/Footer';
import Lightbox from './mini-apps/FluidLightbox/Lightbox';
import Videos from './components/pages/Videos';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/frontend' component={Frontend} />
      <Route path='/fullstack' component={Fullstack} />
      <Route path='/automation' component={Automation} />
      <Route path='/videos' component={Videos} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/bbapi' component={BBapiApp} />
      <Route path='/lightbox' component={Lightbox} />
    </Switch>
    <Footer />
    </Router>     
    </>
  );
}

export default App;
