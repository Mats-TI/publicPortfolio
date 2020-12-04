/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/mainNav';
import Wrapper from './Components/wrapper';
import Projects from './Components/projects';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './Components/style.css';

function App() {

  return (
    <Router>
    <div className="App">
    <div id='mainNav'>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#ProID">My Projects</a></li>
                <li><a href="#ContactID">Get in touch</a></li>
            </ul>    
      </div>
      <Route path='/publicPortfolio' exact component={Wrapper} />
      
    </div>
    </Router>
  )
  }
export default App;
