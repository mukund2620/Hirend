import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { auth, provider } from "./config";
import { signInWithPopup, signOutUser } from "firebase/auth";

import "../components/header.css";

export default function Header() {
  const navRef = useRef();

  const [value, setValue] = useState("");
  const [user, setUser] = useState("Login");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      setUser(data.user.displayName);
    });
  };




  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Hirend.</h3>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#work">Work</a>

        <button className="loginBtn" onClick={handleClick}>
          {{ user } == null ? (
            <>              
              <a style={{ color: "white" }}>Login</a> 								 
			  
            </>
          ) : (
            <a style={{ color: "white" }}>{user}</a>
			
          )}
        </button>


        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

