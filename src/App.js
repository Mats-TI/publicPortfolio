/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/mainNav';
import Wrapper from './Components/wrapper';
import Projects from './Components/projects';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './Components/style.css';
import HomeIcon from "./Components/Media/Icons/homepage_icon.png"
import ProjectIcon from "./Components/Media/Icons/project_icon.png"
import PhoneIcon from "./Components/Media/Icons/contact_phone_icon.png"

function App() {

  return (
    <Router>
    <div className="App">
    <div id='mainNav'>
            <ul>
                <li className="homeLink"><a href="#Home"><img src={HomeIcon}/>Home</a></li>
                <li className="projectLink"><a href="#ProID"><img src={ProjectIcon}/>My Projects</a></li>
                <li className="contactLink"><a href="#ContactID"><img src={PhoneIcon}></img>Get in touch</a></li>
            </ul>    
      </div>
      <Route path='/publicPortfolio' exact component={Wrapper} />
      
    </div>
    </Router>
  )
  }
export default App;
