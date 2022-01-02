/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
import "./mobile-style.css"
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Projects from './projects'
import Wrapper from './wrapper'
import mainLogo from "./Media/PortforlioLogo.jpg"
import openMenu from "./Media/Icons/menuIcon.png"
import closeMenu from "./Media/Icons/closeMenuIcon.png"


class Nav extends React.Component{
    constructor(){
        super()
        this.sideNavRef=React.createRef();
        this.openMenuRef=React.createRef();
        this.state={
            skillDropDown: false,
            toggleMenu:false
        }


    }
    openMobileMenu=()=>{
        if(this.state.toggleMenu===true){

            this.sideNavRef.current.style.clipPath="circle(1000px at 90% 10%)";
            this.openMenuRef.current.style.opacity="0.75"
            this.setState({
                toggleMenu:false
            })
        }
        else{
            this.sideNavRef.current.style.clipPath="circle(0px at 100% 0%)";
            this.openMenuRef.current.style.opacity="1"
            this.setState({
                toggleMenu:true
            })
            

        }
    }
    render(){
        return(
            <div id='mainNav'>
                <nav className='topNavMobile'>
                    <img className="hamburgerIcon" src={openMenu}  onClick={this.openMobileMenu} ref={this.openMenuRef} alt="Menu"></img>
                    <a className="mainLogoMobile" href="#Home"><img src={mainLogo} alt="Logo"></img></a>
                </nav>
                <section className="sideNav" ref={this.sideNavRef}>
                
                    <ul className='sideNavList'>
                    <li className="homeLink"><a href="#Home" onClick={this.openMobileMenu}><i className="fa fa-home"/> Home</a></li>
                    {/*<li className="aboutLink"><a href="#"><i className="fa fa-address-card"/> About</a></li>*/}
                    <li className="skillsLink"><a href="#skills" onClick={this.openMobileMenu}><i className="fa fa-code"/> My Skills </a></li>
                    <li className="projectLink"><a href="#ProID" onClick={this.openMobileMenu}><i className="fa fa-briefcase"/> My Projects</a></li>
                    <li className="contactLink"><a href="#ContactID" onClick={this.openMobileMenu}><i className="fa fa-phone" /> Get in touch</a></li>
                    </ul>
                </section>
                <a className="mainLogo" href="#Home"><img src={mainLogo} alt="Logo"></img></a>
                <ul className="mainNavList">
                      <li className="homeLink"><a href="#Home"><i className="fa fa-home"/> Home</a></li>
                      {/*<li className="aboutLink"><a href="#"><i className="fa fa-address-card"/> About</a></li>*/}
                      <li className="skillsLink"><a href="#skills"><i className="fa fa-code"/> My Skills </a></li>
                      <li className="projectLink"><a href="#ProID"><i className="fa fa-briefcase"/> My Projects</a></li>
                      <li className="contactLink"><a href="#ContactID"><i className="fa fa-phone" /> Get in touch</a></li>
                </ul>    
            </div>
        )
    }
}
export default Nav