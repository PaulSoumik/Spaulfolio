	
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './contact.css'

function Contact() {
  
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
		<section className="contact" id={mobileView ? "contact-mob" : "contact-Bscreen"}>
		<h1 className="text_heading_2 special_headrs" id="contact">CONTACT ME</h1>
		<div className="contact_container flex_cotainer flex_row">
			<div className="my_contact flex-box-2 flex_cotainer">
				<div>
					<span className="text_heading_3" style={{fontWeight: "600" }}>Soumik Paul</span>
					<span className="text_medium"><i className="fa fa-envelope"></i> soumikpaul1999@gmail.com</span>
					<span className="text_medium"><i className="fas fa-address-book" aria-hidden="true"></i> K.K. Roy Lane, Dulmi-Nadiha, Purulia, West Bengal, 723102, India</span>
					<span className="text_medium"><i className="fa fa-mobile"></i> 9593493630</span>
				</div>
			</div>
			<div className="contact_form flex-box-2">
				<form name="submit-to-google-sheet">

			  		<input name="email" type="email" placeholder="Email" required></input>
			  		<input name="name" type="text" placeholder="Your Name"></input>
			  		<input name="message" type="text" placeholder="message" required></input>
			  		<button type="submit">Send</button>
				</form>
			</div>
		</div>
	</section>
	)
}

export default Contact;









