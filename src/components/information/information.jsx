import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './information.css'

function Information() {
  
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
	<section className="brief_information" id={mobileView ? "about-mob" : "about-Bscreen"}>

		<div className="relative_margin" id="about"><h2 className="text_heading_3">Hey! <br></br> <span>I'm Soumik. </span><br></br>Nice to meet you!</h2></div>
		<p className="text_medium"> 
			<font className="text_heading_3 align_left">My introduction &rarr;</font> <br></br> <br></br>
				Experienced Senior Software Engineer skilled in full-stack development, proficient with various programming languages and frameworks. Experienced in agile environments, ensuring timely delivery of high-quality software solutions. Expertise includes problem-solving, mentoring, and optimizing performance. Collaborates effectively with cross-functional teams, delivering innovative solutions aligned with organizational objectives.
			<font className="forward_link"><a href="">For more check my Linkedin profile &rarr;</a></font>
		</p>
	</section>
	)
}

export default Information;