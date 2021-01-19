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

		<div className="relative_margin" id="about"><h2 className="text_heading_3">Hey! <br></br> <span>I'm Soumik Paul. </span><br></br>Nice to meet you!</h2></div>
		<p className="text_medium"> 
			<font className="text_heading_3 align_left">My introduction &rarr;</font> <br></br> <br></br>
			My area of interest is backend development and Web development. I also have worked in the frontend part with a decent knowledge of javascript. I have been a part of the IEEE students branch NIT Durgapur as a Web developer for the last two years. Meanwhile, I have done a few mini projects on Django like an authentication system, a To-Do app, etc.

			<font className="forward_link"><a href="">For more check my Linkedin profile &rarr;</a></font>
		</p>
	</section>
	)
}

export default Information;