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
            <h2 className="projectSubHeading">Browse through some of the web-applications and websites created...</h2>
            <section className='projectSection'>
                <div className='projects-desktop'>
                <Carousel cols={4} rows={1} loop>
                    <Carousel.Item><Card techStack='React.js, Node.js' image={catebzaLogo} name='Catebza Trading' link='https://mats-ti.github.io/CatebzaTrading'></Card></Carousel.Item>
                    <Carousel.Item><Card techStack='React.js, APIs' image={Gallery_img} name='Image Gallery' link='https://mats-ti.github.io/gallery'></Card></Carousel.Item>
                    <Carousel.Item><Card techStack='JavaScript, HTML5, CSS3' image={DCproject} name='DC Quiz Game' link='https://mats-ti.github.io/DCGame'></Card></Carousel.Item>
                </Carousel>
                </div>
                <div className="projects-mobile">
                <Card techStack='React.js, Node.js' image={catebzaLogo} name='Catebza Trading' link='https://mats-ti.github.io/CatebzaTrading'></Card>
                <Card techStack='React.js, APIs' image={Gallery_img} name='Image Gallery' link='https://mats-ti.github.io/gallery'></Card>
                <Card techStack='JavaScript, HTML5, CSS3' image={DCproject} name='DC Quiz Game' link='https://mats-ti.github.io/DCGame'></Card>
                
                </div>
            </section>
            </div>
        )
    }
}
export default Projects