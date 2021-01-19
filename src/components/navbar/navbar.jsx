import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './navbar.css'

function Navbar(props) {
	const [state, setState] = useState({
    	mobileView: false
  	})
	const { mobileView } = state;
  
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
	  	
			<nav className = {mobileView ? "navItems navbar-mob" : "navItems navbar"}  id = {props.idName}>
				<a className="header_active" id="item">{mobileView ? "-" : ""}  home</a>
				<a id="item" href="#about">{mobileView ? "-" : ""}  about</a>
				<a id="item" href="#skills">{mobileView ? "-" : ""}  skills</a>
				<a id="item" href="#projects">{mobileView ? "-" : ""}  projects</a>
				<a id="item" href="#resume">{mobileView ? "-" : ""}  resume</a>
				<a id="item" href="#contact">{mobileView ? "-" : ""}  contact</a>
			</nav>
			
		
		
	)
}


export default Navbar;