/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Projects from './projects'
import Wrapper from './wrapper'


function Headers(){
    return(
        <Router>
        <div id='mainNav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>My Projects</Link></li>
                <li>About</li>
                <li>Get in touch</li>
            </ul>
        </div>    
        </Router>
    )
}
export default Headers