/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/mainNav';
import Wrapper from './Components/wrapper';
import Projects from './Components/projects';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './Components/style.css';
import mainLogo from "./Components/Media/PortforlioLogo.jpg"
import Nav from './Components/mainNav';

function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path='/publicPortfolio' exact component={Wrapper} />
      
    </div>
    </Router>
  )
  }
export default App;
