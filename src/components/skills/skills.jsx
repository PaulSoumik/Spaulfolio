	
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './skills.css'

function Skills() {
  
	const [state, setState] = useState({
    	mobileView: false,
    	skills:["C++","C","Python","Django","SQL","React JS","HTML5","CSS","SASS" ,"Javascript","REST API","Bootstrap","jQuery","SASS","PostgreSQL", "git"]
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
				<li>
					<p> {skill} </p>
				</li>
			))}
		</ul>
	</section>
	)
}

export default Skills;









