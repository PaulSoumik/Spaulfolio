	
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './landing.css'

function Landing() {
  
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
	<section className="intro container" id={mobileView ? "intro-mob" : "intro-Bscreen"}>
		<div className="flex_cotainer introflex">

				<div className="height_flex_1 landingcontent">
					<div className="middle_align content_container">
						<div className="heading_container">
							<h1 className="text_heading_1">SOUMIK PAUL</h1>
						</div>
						<ul className="descriptions display_flex">
							<li className="description">Developer</li>
							<li className="description">Programmer</li>
							<li className="description">Learner</li>
						</ul>
					</div>
				</div>

		</div>
		<nav className="link_container display_flex">
			<a href="linkedinlink"><i className="fab fa-linkedin-in"></i></a>
			<a href="githublink"><i className="fab fa-github"></i></a>
			<a href="facebooklink"><i className="fab fa-facebook-f"></i></a>
			<a href="emaillink"><i className="far fa-envelope"></i></a>
		</nav>
	</section>
	)
}

export default Landing;









