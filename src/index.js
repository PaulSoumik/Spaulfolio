import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./mycss/style.css";
import projectService from "./projectService";
import experienceService from "./experienceService";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Landing from "./components/landing/landing";
import Information from "./components/information/information";
import Skills from "./components/skills/skills";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";


class Folio extends Component{
	state={
		allpro: [],
		myExp: []
	};

	getProjects = () => {
		this.setState({
			allpro: projectService
		});
	};
	getExperiences = () =>{
		console.log(experienceService);
		this.setState({
			myExp: experienceService
		});
	};
	componentDidMount(){
		this.getProjects();
		this.getExperiences();
	}

	render(){
		return(
				<div className="container">
					<Header/>
					<Landing/>
					<Information/>
					<Skills/>
					<Experience experiences = {this.state.myExp}/>
					<section className="Projects" id="projects">
						<h1 className="text_heading_2 special_headrs">PROJECTS</h1>
						<></>
						{ this.state.allpro.map(
							({projectDetails, heading, text, projectId, githubLink, skills}) => ( 
								<Projects
								projectDetails = {projectDetails}
								heading = {heading}
								projectId = {projectId}
								text= {text}
								githubLink = {githubLink}
								skills = {skills}
								
								/> 
						)
						)}
					
					</section>
					<Resume/>
					<Contact/>
					
				</div>

			);
	}
}

/*{this.state.projectData.map(
						({project, heading, text, projectId}) => ( 
							<Project
								project = {project}
								heading = {heading}
								key = {projectId}
								text= {text}
								
							/>
)}*/

	/*getProjects = () =>{
		projectService().then( project => {
			this.setState({
				projectsAll : project
			});
		});
	};
	componentDidMount() {
		this.getProjects();
	}*/


ReactDOM.render(<React.StrictMode> <Folio /> </React.StrictMode>, document.getElementById("root"));
