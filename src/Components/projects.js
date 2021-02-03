/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import './style.css'
import DCproject from "./Media/MainDC.jpg"
import Gallery_img from "./Media/gallery_logo.png"
import Chess_img from './Media/Chess pic.jpg'
import {Carousel} from "3d-react-carousal"

const slides=[<img src={DCproject} />,
<img src={Chess_img}></img>,
<img src={Gallery_img}/>
];

class Projects extends Component{

    render(){
        return(
            <div className='projectsDiv' id="ProID">
            <h1><span className="h1">My Projects</span></h1>
            <section className='projectSection'>
                {/*<h2 className="projectSubHeading">Browse through some of the web-applications and websites created.</h2>*/}
                <Carousel slides={slides}>
                
                </Carousel>
                <div className="projectDetails">
                    <h2>Project Details</h2>
                    <p>Project name: DC Quiz Game.</p>
                    <p>Project type: Web-application.</p>
                    <a href="https://thapza101.github.io/DCGame">Go to DC Quiz Game's Page</a>
                </div>
                {/*<div><a href='https://thapza101.github.io/chessSite/'><img className='site2' src={Chess_img} alt='chess website' title="A Chess club Website" /></a></div>
                <div><a href='https://thapza101.github.io/DCGame/'><img className='site1' src={DCproject} alt='DCgame' title="A DC Quiz Game"/></a></div>
                
                <div><a href="https://thapza101.github.io/gallery"><img className="site3" src={Gallery_img} alt="Prime Gallery Builder" title="A Galley builder"/></a></div>
        */}
            </section>
            </div>
        )
    }
}
export default Projects