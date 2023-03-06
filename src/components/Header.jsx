import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


import "../components/header.css"

export default function Header() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
	
		<header>
			<h3>Hirend.</h3>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="#about">About</a>
				<a href="#service">Services</a>
				<a href="#work">Work</a>
        		<button className="loginBtn">
          			Login
        		</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>

  );
}
