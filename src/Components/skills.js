import React, {Component} from 'react'
import JSIcon from "./Media/Icons/javascript_icon.png"
import PyIcon from "./Media/Icons/python_icon.png"
import sqlIcon from "./Media/Icons/sql_icon.png"
import htmlIcon from "./Media/Icons/html_icon.png"
import css3_icon from "./Media/Icons/css3_icon.png"
import reactIcon from "./Media/Icons/react_icon.png"
import npmIcon from "./Media/Icons/npm_icon.png"
import apiIcon from "./Media/Icons/api_icon.png"
import nodeIcon from "./Media/Icons/node js_icon.png"
import PandasIcon from "./Media/Icons/pandas_icon_56x56.png"
import numpyIcon from "./Media/Icons/numpy_logo_56x56.png"
import sklearnIcon from "./Media/Icons/scikit_logo_56x56.png"
import regIcon from "./Media/Icons/regression_icon_56x56.png"
import classIcon from "./Media/Icons/Classification_icon_56x56.png"
import clusterIcon from "./Media/Icons/DataClustering_icon_1_56x56.png"
import visualIcon from "./Media/Icons/DataVisual_56x56.jpg"

class Skills extends Component{
    constructor(){
        super()
        this.MLRef=React.createRef();
        this.WebRef=React.createRef();
        this.state={
            mySkills:[
                "React.js",
                "Node Package Manager",
                "API",
                "Express.js",
                "Pandas",
                "Numpy",
                "Scikit Learn",
                "Machine Learning Concepts",
                "Regression Algorithms",
                "Classification Algorithms",
                "Data Clustering Algorithms",
                "Data Visualization"
            ],
            Languages:[
                "Python",
                "JavaScript",
                "SQL",
                "HTML5",
                "CSS3"
            ],
            skillSection:"Web development toolbox"
        }

    }
    changeSkills=()=>{
        if(this.state.skillSection==="Web development toolbox"){
            this.MLRef.current.style.animation="anime 3s"
            this.MLRef.current.style.display="grid"
            this.WebRef.current.style.display="none"
            this.setState({
                skillSection:"Machine Learning toolbox"
            })            
        }
        else if(this.state.skillSection==="Machine Learning toolbox"){
            this.WebRef.current.style.animation="anime 3s"
            this.MLRef.current.style.display="none"
            this.WebRef.current.style.display="grid"
            this.setState({
                skillSection:"Web development toolbox"
            })
        }
    }
    render(){
        return(
            <div className="skillsDiv" id="skills">
                <h1>My Skills</h1>
                <h2>{this.state.skillSection}</h2>
                <figure className='mainCircleWeb' ref={this.WebRef}>
                <section className='mainCircleText'>
                    <button className='skills-nav' onClick={this.changeSkills} title="Open Machine Learning toolbox">Show ML skills</button>
                </section>
                <span className='miniCircle mini1'>
                    <img src={reactIcon} alt='reactIcon'/>
                    <p className='lang'>React.js</p>
                </span>
                <span className='miniCircle mini2'>
                    <img src={JSIcon}  alt="JS_icon"/>
                    <p className='lang'>JavaScript</p>
                </span>
                <span className='miniCircle mini3'>
                    <img src={sqlIcon} alt="sql_icon"/>
                    <p className='lang'>SQL</p>
                </span>
                <span className='miniCircle mini4'>
                    <img src={htmlIcon} alt="html_icon"/>
                    <p className='lang'>HTML5</p>
                </span>
                <span className='miniCircle mini5'>
                <img src={css3_icon} alt="css_icon" />
                    <p className='lang'>CSS3</p>
                </span>
                <span className='miniCircle mini6'>
                <img src={npmIcon} alt="npm_icon" />
                    <p className='lang'>NPM</p>
                </span>
                <span className='miniCircle mini7'>
                <img src={apiIcon} alt="api_icon" />
                    <p className='lang'>APIs</p>
                </span>
                <span className='miniCircle mini8'>
                <img src={nodeIcon} alt="node_icon" />
                    <p className='lang'>Node.js </p>
                </span>
                </figure>

                <figure className='mainCircleML' ref={this.MLRef}>
                <section className='mainCircleText'>
                    <button className='skills-nav' onClick={this.changeSkills} title="Open Web development toolbox">Show Web dev skills</button>
                </section>
                <span className='miniCircle mini1'>
                    <img src={PyIcon} alt='PyIcon'/>
                    <p className='lang'>Python</p>
                </span>
                <span className='miniCircle mini2'>
                    <img src={PandasIcon}  alt="pandasIcon"/>
                    <p className='lang'>Pandas</p>
                </span>
                <span className='miniCircle mini3'>
                    <img src={numpyIcon} alt="numpy_icon"/>
                    <p className='lang'>Numpy</p>
                </span>
                <span className='miniCircle mini4'>
                    <img src={sklearnIcon} alt="skLearnIcon"/>
                    <p className='lang'>SciKit-Learn</p>
                </span>
                <span className='miniCircle mini5'>
                <img src={clusterIcon} alt="cluster_icon" />
                    <p className='lang'>Data Clustering Algorithms</p>
                </span>
                <span className='miniCircle mini6'>
                <img src={classIcon} alt="class_icon" />
                    <p className='lang'>Classification Algorithms</p>
                </span>
                <span className='miniCircle mini7'>
                <img src={visualIcon} alt="visual_icon" />
                    <p className='lang'>Data Visualization</p>
                </span>
                <span className='miniCircle mini8'>
                <img src={regIcon} alt="reg_icon" />
                    <p className='lang'>Regression Algorithms</p>
                </span>
                
                </figure>

            </div>
        )
    }
}
export default Skills