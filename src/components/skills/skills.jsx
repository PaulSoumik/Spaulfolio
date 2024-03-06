	
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './skills.css'

function Skills() {
  
	const [state, setState] = useState({
    	mobileView: false,
    	skills:[
			"Proficient in programming languages such as C, C++, Apex, Java.",
			"Ability to work with frontend frameworks such as ReactJS, lightning web components, Vsualforce pages.",
			"Understanding of backend frameworks like ExpressJS, Django and Spring.",
			"Expertise in building RESTful APIs.",
			"Database management using SQL, SOQL and DBMS.",
			"Experience with Object Oriented Programming ad Problem Solving.",
			"Familiarity with version control systems like Git and CI/CD pipelines."]
  	})
	const { mobileView, skills } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return(
	<section className="skills_container" id={mobileView ? "skills-mob" : "skills-Bscreen"}>
		<h1 className="text_heading_2 special_headrs" id="skills">SKILLS</h1>
		<ul className="skillslist flex_cotainer flex_row">
			{skills.map(
			(skill) => (
				<li className = 'flex_card'>
					<p className = 'text-vertical-center'> {skill} </p>
				</li>
			))}
		</ul>
	</section>
	)
}

export default Skills;









