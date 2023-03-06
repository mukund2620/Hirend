import React from 'react'
import './footer.css'

import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Hirend.</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#work">Work</a></li>
        </ul>

        <div className="footer__socials">

            <a href="https://facebok.com"><BsFacebook/></a>
            <a href="https://instagram.com"><AiFillInstagram/></a>
            <a href="https://twitter.com"><AiFillTwitterCircle/></a>
        </div>

        <div className="footer__copyright">
      <small> &copy; Hirend. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer
