	
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
			<a href="https://www.linkedin.com/in/soumik-paul/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
			<a href="https://github.com/PaulSoumik" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
			<a href="https://www.instagram.com/_lostinunknown/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
			<a href="mailto:soumikpaul1999@gmail.com"><i className="far fa-envelope"></i></a>
		</nav>
	</section>
	)
}

export default Landing;









