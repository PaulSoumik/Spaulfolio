import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './header.css'
import Navbar from "../navbar/navbar";

function Header() {
  
	const [state, setState] = useState({
    	mobileView: false,
    	displaynav: false,
      icon: "+"
  	})
	const { mobileView, displaynav, icon } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  	const display = () =>{
    if(!displaynav){
      setState((prevState) => ({ ...prevState, icon: "-" }))
     }
    else{
      setState((prevState) => ({ ...prevState, icon: "+" }))
    }

	 setState((prevState) => ({ ...prevState, displaynav: !displaynav }))
	};

  return(
		<section className = "Header" id={mobileView ? "mob" : "bigsc"}>
			<div className= "display_flex header-align">
  			{mobileView ? ( <button className="header-btn" onClick={display}>{icon}</button> ) : (<></>)}
        <a>Soumik</a>
      </div>
			<Navbar idName = {displaynav ? "active" : "inactive"}/>
		</section>
	)
}

export default Header;