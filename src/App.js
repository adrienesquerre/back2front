import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Frontend from './components/pages/Frontend';
import Fullstack from './components/pages/Fullstack';
import Calendar from './mini-apps/calendarApp/Calendar';
import BBapiApp from './mini-apps/BBAPI/BbapiApp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/frontend' component={Frontend} />
      <Route path='/fullstack' component={Fullstack} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/bbapi' component={BBapiApp} />
    </Switch>
    <Footer />
    </Router>     
    </>
  );
}

export default App;
