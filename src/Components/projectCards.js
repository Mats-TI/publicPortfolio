import React from "react";

const Card=function(props){
    return(
        <div className='projectCard'>
            <img src={props.image} alt="project Banner" />
            <h3 className="projectTitle">{props.name}</h3>
            <h4>Tech Stack:</h4>
            <p className='desc'>{props.techStack}</p>
            <button><a href={props.link} target='blank'>Go to site<i className="fa fa-arrow-right"></i></a></button>
        </div>
    )
}
export default Card 