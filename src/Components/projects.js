/* eslint-disable no-sequences */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import './style.css'
import "./mobile-style.css"
import DCproject from "./Media/MainDC.jpg"
import Gallery_img from "./Media/gallery_logo.png"
import catebzaLogo from "./Media/CatebzaLogo.png"
import Carousel from 'react-grid-carousel'
import Card from './projectCards'

class Projects extends Component{
    render(){
        return(
            <div className='projectsDiv' id="ProID">
            <h1><span className="h1">My Projects</span></h1>
            <section className='projectSection'>
                <h2 className="projectSubHeading">Browse through some of the web-applications and websites created.<br /> Click on an icon to access an individual Project.</h2>
                <Carousel cols={4} rows={1} loop >
                    <Carousel.Item><Card image='catebzaLogo' desc='This is a desc'></Card></Carousel.Item>
                    <Carousel.Item><a href="https://mats-ti.github.io/CatebzaTrading" target="_blank"><img src={catebzaLogo}/></a></Carousel.Item>
                    <Carousel.Item><a href="https://mats-ti.github.io/gallery" target="_blank" ><img src={Gallery_img}/></a></Carousel.Item>
                    <Carousel.Item><a href="https://mats-ti.github.io/DCGame" target="_blank"><img src={DCproject}/></a></Carousel.Item>
                    
                </Carousel>
                <div className="grid_projects">
                    <a href="https://mats-ti.github.io/CatebzaTrading" target="_blank"><img src={catebzaLogo}/></a>
                    <a href="https://mats-ti.github.io/gallery" target="_blank" ><img src={Gallery_img}/></a>
                    
                    <a href="https://mats-ti.github.io/DCGame" target="_blank"><img src={DCproject}/></a>
                </div>
            </section>
            </div>
        )
    }
}
export default Projects