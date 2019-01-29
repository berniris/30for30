import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Logo from './components/Logo';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return ( 
      <div>
      <Route exact path = "/" render = { props =>
          <div>
          <Nav /> 
          <Logo/ >
          <Home/ >
          </div>
      }
      /> 
      <Route path = "/:id" render = { props =>
        <div >
        <Nav/> 
        <Logo/ >
        </div>
       }
         /> 
   <Route exact path = "/about" render = { props =>
      <About/>
      } 
      />
    <Route exact path = "/sites" render = { props =>
      <Projects/>
      } 
      />
          <Route exact path = "/contact" render = { props =>
      <Contact/>
      } 
      />
      </div>
    );
  }
}

export default App;
