import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './projects.css'

function Projects(props) {
	const [state, setState] = useState({
    	mobileView: false
  	})
	const { mobileView } = state;
  	var classproj = "projects-info display_flex project_" + props.projectId;
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
	  	
		<div className={classproj} id = {mobileView ? "project-mob" : "project-big-screen"}>
			<div className="flex-box-2 project_detail">
				<h1 className="text_heading_2 project_heading">{props.heading} </h1>
				<p className="text_medium description">{props.projectDetails}
				</p>
			</div>
			<div className="flex-box-2 project_link text_medium">
				<h1 className="text_heading_3 project_side_heading">{props.text}</h1>
				<ul className="skillset_list display_flex">
				{props.skills.map( isaskill =>
					<li className="skill_used"> {isaskill} </li>
				)}
				</ul>
				<font className="forward_link"><a href={props.githubLink} target="_blank">Visit github repository &rarr;</a></font>
			</div>
		</div>
			
		
		
	)
}


export default Projects;