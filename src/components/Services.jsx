import React from "react";
import "../components/services.css";
import {FaQuoteRight} from "react-icons/fa"


export default function about() {
  return (
    <section id="services">
    <div className="service">
        
      <h1>Our Services</h1>
      <div className="aboutP">
        <FaQuoteRight/>
     
      </div>
    </div>
    </section>
  );
}
