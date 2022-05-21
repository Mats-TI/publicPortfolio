import React from "react";
import catebzaLogo from "./Media/CatebzaLogo.png"


const Card=()=>{
    return(
        <div className='projectCard'>
            <img src={catebzaLogo} alt="project Banner" />
            <p className="description">description</p>
            <button>Go to site <i className="fa fa-arrow-right"></i></button>
        </div>
    )
}
export default Card 