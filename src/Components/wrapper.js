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
import AI from "./Media/brain_electronics_icon.png"
import DEV from "./Media/2290862_code_dashboard_development_html_text_icon.png"


class Wrapper extends React.Component{
    constructor(){
        super()
    }
    
    render(){
    return(
        <Router>
        <div>
            <div className="Wrapper" id='Home'>
                <h1>The name's Thapelo, pleased to make your acquaintance.</h1>
                <div className="info">
                <img src={DEV} alt="DevIcon"></img>
                <p className="p1">Full Stack Web Developer</p>
                <img src={AI} alt="AI"></img>
                <p className="p1">Machine Learning Engineer</p>

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

