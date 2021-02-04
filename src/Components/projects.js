/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import './style.css'
import DCproject from "./Media/MainDC.jpg"
import Gallery_img from "./Media/gallery_logo.png"
import Chess_img from './Media/Chess pic.jpg'
import {Carousel} from "3d-react-carousal"

const slides=[
<a href="https://thapza101.github.io/gallery" ><img src={Gallery_img}/></a>,
<a href="https://thapza101.github.io/chessSite" style={{height:"200px"}}><img src={Chess_img} style={{height:"80%"},{width:"50%"}} /></a>,
<a href="https://thapza101.github.io/DCGame" style={{height:"200px"}}><img src={DCproject} style={{height:"80%"},{width:"50%"}}/></a>,
];
var details=[
    {Naam:"Queen's Gambit Chess Club",Type:"Website",linksTo:"https://thapza101.github.io/chessSite",nameOfLink:"Go to Queen's Gambit's site"},
    {Naam:"Gallery", Type:"Web-application", linksTo:"https://thapza101.github.io/gallery",nameOfLink:"Go to the Gallery site"}

]

class Projects extends Component{
    constructor(){
        super();
        this.state={
            name:"DC Quiz Game",
            type:"Web-application",
            link:"https://thapza101.github.io/DCGame",
            linkName:"Go to DC Quiz Game's Page"
        }
    }
    changeDetails=()=>{
        var i=0;
        this.setState({
            name:details[i].Naam,
            type:details[i].Type,
            link:details[i].linksTo,
            linkName:details[i].nameOfLink
        },()=>{
            i=i+1;
        })
    }

    render(){
        return(
            <div className='projectsDiv' id="ProID">
            <h1><span className="h1">My Projects</span></h1>
            <section className='projectSection'>
                <h2 className="projectSubHeading">Browse through some of the web-applications and websites created.<br /> Click on an icon to access an individual Project.</h2>
                <Carousel slides={slides} >
                
                </Carousel>
                {/*<div className="projectDetails">
                    <h2>Project Details</h2>
                    <p>Project name:{` ${this.state.name}`}.</p>
                    <p>Project type: {` ${this.state.type}`}.</p>
                    <a href={this.state.link}>{this.state.linkName}</a>
        </div>
        <button onClick={this.changeDetails}>Change Details</button>*/}
            </section>
            </div>
        )
    }
}
export default Projects