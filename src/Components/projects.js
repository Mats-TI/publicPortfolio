import React, {Component} from 'react'
import './style.css'
import DCproject from "./Media/MainDC.jpg"
import Gallery_img from "./Media/gallery_logo.png"
import Chess_img from './Media/Chess pic.jpg'

class Projects extends Component{

    render(){
        return(
            <div className='projectsDiv' id="ProID">
            <h1 className="h1">My Projects</h1>
            <section className='projectSection'>
                <div><a href='https://thapza101.github.io/chessSite/'><img className='site2' src={Chess_img} alt='chess website' title="A Chess club Website" /></a></div>
                <div><a href='https://thapza101.github.io/DCGame/'><img className='site1' src={DCproject} alt='DCgame' title="A DC Quiz Game"/></a></div>
                
                <div><a href="https://thapza101.github.io/gallery"><img className="site3" src={Gallery_img} alt="Prime Gallery Builder" title="A Galley builder"/></a></div>
            
            </section>
            </div>
        )
    }
}
export default Projects