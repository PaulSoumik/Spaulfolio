	
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './resume.css'

function Resume() {
  
	const [state, setState] = useState({
    	mobileView: false,
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
	<section className="getresume" id={mobileView ? "resume-mob" : "resume-Bscreen"}>
		<h1 className="text_heading_2 special_headrs" id="resume">RESUME</h1>
		<div className="flex_cotainer flex_row">
			<div className="content flex-box-2">
				<p>For more details, here's my <font style={{fontSize: "1.4em"}}>Resume</font>.</p>
			</div>
			<div className="linktodownload">
				<nav>
					<a href="#"><i className="fa fa-download" aria-hidden="true"></i></a>
				</nav>
				<p className="text_medium"> <a href="https://docs.google.com/document/d/13Vtc4176ErZNAV-UAS3G9AU87c7bovysD6wy9TLv688/edit?usp=sharing" target="_blank" style={{color: "inherit"}}>get my Resume </a></p>
			</div>
		</div>
	</section>
	)
}

export default Resume;










