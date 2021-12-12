/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Projects from './projects'
import Wrapper from './wrapper'
import mainLogo from "./Media/PortforlioLogo.jpg"


class Nav extends React.Component{
    constructor(){
        super()
        this.state={
            skillDropDown: false
        }

    }
    render(){
        return(
            <div id='mainNav'>
            <a className="mainLogo" href="#Home"><img src={mainLogo} alt="Logo"></img></a>
                  <ul>
                      <li className="homeLink"><a href="#Home"><i className="fa fa-home"/> Home</a></li>
                      {/*<li className="aboutLink"><a href="#"><i className="fa fa-address-card"/> About</a></li>*/}
                      <li className="skillsLink"><a href="#"><i className="fa fa-code"/> My Skills &#x25BC; </a></li>
                      <li className="projectLink"><a href="#ProID"><i className="fa fa-briefcase"/> My Projects</a></li>
                      <li className="contactLink"><a href="#ContactID"><i className="fa fa-phone" /> Get in touch</a></li>
                  </ul>    
            </div>
        )
    }
}
export default Nav