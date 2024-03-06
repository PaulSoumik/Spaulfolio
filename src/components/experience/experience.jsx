import React, { Component } from "react"; 
import './experience.css'
  
class Experience extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            mobileView: false,
            myExperiences: []
        };
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? this.setState({mobileView: true})
                : this.setState({mobileView: false});
        };
        
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness()); 
    } 
    static getDerivedStateFromProps(props, state){
        console.log(props);
        return {myExperiences: props.experiences};
        
    }
  
    render() { 
        return (
            <section className = 'Experience' id = 'experience'>
            <h1 className="text_heading_2 special_headrs">EXPERIENCE</h1>
            {this.state.myExperiences.map(exp =>
                <div data-id = {exp.dataid} className = {'experience_'+exp.projectId} id = {this.state.mobileView ? "experience-mob" : "experience-big-screen"}>
                    <div className="experience_details">
                        <h1 className="text_heading_2 experience_heading"> {exp.jobTitle}</h1>
                        <p className="text_heading_4">{exp.company}, {exp.location}</p>
                        <p className="text_medium">{exp.timeline}</p>
                        <p className="text_medium description">{exp.workDetails}</p>
                    </div>
                    <div className="experience_link text_medium">
                        <ul className="skillset_list display_flex">
                        {exp.skills.map( isaskill =>
                            <li className="skill_used"> {isaskill} </li>
                        )}
                        </ul>
                        <font className="forward_link"><a href='{/*props.githubLink*/}' target="_blank">Visit github repository &rarr;</a></font>
                    </div>
                </div>
            )}
            </section>
            
        ) 
    } 
} 
  
export default Experience; 