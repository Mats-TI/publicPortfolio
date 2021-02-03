/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './style.css'
import Projects from './projects'
import DCproject from './Media/MainDC.jpg'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Contact from './Contact'
import BackToTop from 'react-back-to-top-button'
import topIcon from "./Media/iconfinder_arrow-up_511953.png"


class Wrapper extends React.Component{
    constructor(){
        super()
    }
    
    render(){
    return(
        <Router>
        <div>
            <div className="Wrapper" id='Home'>
                <h1>The name is Thapelo, pleased to make your acquintance.</h1>
                <div className="info">
                <p className="p1">I am a Front-end Developer with proficiency in HTML5, CSS3, Vanilla Javascript and React.js library.</p>
                <p className="p1">My other konwledge areas include server-side scripting in Node.js runtime environment and MySQL Database Management System.</p>
                 <p className="p1">Feel free to have a look at my constantly improving work under the <a href="#ProID" >Projects</a> section.</p>
            </div>
            <BackToTop showAt={300}>
                <img src={topIcon} alt="Back To Top" />
            </BackToTop>
            </div>
            <Projects />
            <Contact />
        
        </div>
        </Router>


            
    )
    }
}

export default Wrapper

