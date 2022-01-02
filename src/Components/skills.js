import React, {Component} from 'react'

class Skills extends Component{
    constructor(){
        super()
        this.state={
            mySkills:[
                "React.js",
                "Node Package Manager",
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
            ]
        }

    }
    render(){
        return(
            <div className="skillsDiv" id="skills">
                <figure className='mainCircle'>
                <section className='languages'>
                    <p className='lang1'>Python</p>
                    <p className='lang1'>JavaScript</p>
                    <p className='lang1'>SQL</p>
                    <p className='lang1'>HTML5</p>
                    <p className='lang1'>CSS3</p>
                </section>
                <span className='miniCircle mini1'></span>
                <span className='miniCircle mini2'></span>
                <span className='miniCircle mini3'></span>
                <span className='miniCircle mini4'></span>
                <span className='miniCircle mini5'></span>
                </figure>

            </div>
        )
    }
}
export default Skills