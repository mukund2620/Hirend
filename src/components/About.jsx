import React from "react";
import "../components/about.css";
import { FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { EffectFlip, Navigation, Pagination, Scrollbar } from "swiper";

import a from "../assets/img1.jpg";
import b from "../assets/img2.jpg";
import d from "../assets/img4.jpg";

import "../components/hero.css";
import { AiOutlineArrowRight } from "react-icons/ai";

import cam1 from "../assets/cam1.png";
import cam2 from "../assets/cam2.jpg";
import cam3 from "../assets/cam3.jpg";
import { toast } from "react-toastify";

export default function about() {

  function booked(){
    const hrs = document.getElementById("hours").value
    if(hrs.value>1){
      toast.success("Camera Successfully booked for "+hrs+" hour and Total amount to be paid ₹4000")
  } else {
    const price = hrs*4000
    toast.success("Camera Successfully booked for "+hrs+" hours and Total amount to be paid ₹"+price)

  }

  }
  function booked2(){
    const hrs = document.getElementById("hours2").value
    if(hrs.value>1){
      toast.success("Camera Successfully booked for "+hrs+" hour and Total amount to be paid ₹5000")
  } else {
    const price = hrs*5000
    toast.success("Camera Successfully booked for "+hrs+" hours and Total amount to be paid ₹"+price)

  }

  }
  function booked3(){
    const hrs = document.getElementById("hours3").value
    if(hrs.value>1){
      toast.success("Camera Successfully booked for "+hrs+" hour and Total amount to be paid ₹6000")
  } else {
    const price = hrs*6000
    toast.success("Camera Successfully booked for "+hrs+" hours and Total amount to be paid ₹"+price)

  }

  }
  return (
    <>
      <section id="/">
        <div className="hero_bg">
          <div className="hero">
            <h2>Memories</h2>
            <p>
              are fleeting <br />
              but photographs are
            </p>
            <h2>FOREVER</h2>
            <small>
              Book a photographer today and tressure your memories forever
            </small>

            <a href="#booking" className="button1">
              Book Appointment <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about_div">
          <img
            src="https://t3.ftcdn.net/jpg/02/70/09/98/360_F_270099822_9zbx236dHn1hyxYNl9HSOBvpUEpU0eOz.jpg"
            width={"200px"}
            height={"200px"}
            alt=""
          />
          <h1>About</h1>
          <h2>Welcome to our photography website!</h2>
          <div className="aboutP">
            <FaQuoteRight />
            <p>
              We are a team of professional photographers dedicated to capturing
              beautiful, authentic moments through our lenses. With years of
              experience and a keen eye for detail, we offer a wide range of
              photography services for any occasion.
            </p>
            <p>
              Whether you're looking for a wedding photographer, family portrait
              photographer, or someone to capture your corporate event, we've
              got you covered. Our services are tailored to meet your specific
              needs, and we work closely with you to ensure that we capture
              exactly what you're looking for.
            </p>
            <p>
              We believe that photography is an art form, and we approach every
              project with creativity and passion. Our goal is to provide you
              with stunning, high-quality images that you will treasure for
              years to come.
            </p>
            <p>
              So if you're looking for a photography team that is reliable,
              professional, and passionate about their craft, look no further!
              Contact us today to learn more about our services and how we can
              help you capture your special moments.
            </p>
          </div>
        </div>
      </section>
      <section id="service">
        <div className="servicesDiv">
          <h1>Our Services</h1>
          <div className="ServCont">
            <div className="serviceCard">
              <AiFillStar size={50} color={"#436dffd9"} />
              <h2>Fast & Reliable</h2>
            </div>
            <div className="serviceCard">
              <AiFillStar size={50} color={"#436dffd9"} />
              <h2>Experienced</h2>
            </div>
            <div className="serviceCard">
              <AiFillStar size={50} color={"#436dffd9"} />
              <h2>On-Time Delivery</h2>
            </div>
          </div>
          <div className="ServCont">
            <div className="serviceCard">
              <AiFillStar size={50} color={"#436dffd9"} />
              <h2>Customer Friendly</h2>
            </div>
            <div className="serviceCard">
              <AiFillStar size={50} color={"#436dffd9"} />
              <h2>Cost-Effective</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="slides">
          <h1>Our Works</h1>

          <div className="images">
            <Swiper
              modules={[EffectFlip, Navigation, Pagination, Scrollbar]}
              effect="Flip"
              spaceBetween={300}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{
                alignContent: "center",
                height: "600px",
                aspectRatio: "auto",
              }} className="swiper"
            >
              <SwiperSlide>
                <img src={a} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={b} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={d} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section id="booking">
        <div className="cameras">
          <h1>Our Cameras</h1>
          <div className="cameraSec">
            <div className="cameraCard">
              <div className="camBg">
                <img
                  src={cam1}
                  alt=""
                  style={{ width: "301px", height: "201px" }}
                />
              </div>
              <h3>Canon EOS R5</h3>
              <h4>Price : ₹4000/Hr</h4>
              <p>Specifications</p>
              <ul>
                <li>45 Megapixels Fill-Frame sensor</li>
                <li>8K Video Recording</li>
                <li>5-Axis Image Stabilization</li>
                <li>Wi-Fi and Bluetooth Connectivity</li>
              </ul>
              <input type="number" id="hours" className="hours"  placeholder="No. of Hours" min={"1"}
              style={{
                width: "50%",
                marginTop: "1rem",
                border: "none",
                padding: "10px",
                textAlign: "center",
                borderRadius: "24px",
             
              }}/>

              
              <button className="loginBtn" onClick={booked}>BOOK NOW</button>
            </div>
            <div className="cameraCard">
              <div className="camBg">
                <img
                  src={cam2}
                  alt=""
                  style={{ width: "301px", height: "201px", padding: "10px" }}
                />
              </div>
              <h3>Canon EOS-1D X Mark III</h3>
              <h4>Price : ₹5000/Hr</h4>
              <p>Specifications</p>
              <ul>
                <li>20.1 megapixel full-frame</li>
                <li>CMOS sensor</li>
                <li>ISO range of 100-102,400</li>
                <li>191-point autofocus system</li>
              </ul>
              <input type="number" id="hours2" className="hours"  placeholder="No. of Hours" min={"1"}
              style={{
                width: "50%",
                marginTop: "1rem",
                border: "none",
                padding: "10px",
                textAlign: "center",
                borderRadius: "24px",
                
              }}/>
              <button className="loginBtn" onClick={booked2}>BOOK NOW</button>
            </div>
            <div className="cameraCard">
              <div className="camBg">
                <img
                  src={cam3}
                  alt=""
                  style={{ width: "301px", height: "201px", padding: "10px" }}
                />
              </div>
              <h3>Sony Alpha a9 II</h3>
              <h4>Price : ₹6000/Hr</h4>
              <p>Specifications</p>
              <ul>
                <li>24.2 megapixel full-frame stacked</li>
                <li>ISO range of 100-51,200 </li>
                <li>20 fps continuous shooting</li>
                <li>693-point autofocus system</li>
              </ul>
              <input type="number" id="hours3" className="hours"  placeholder="No. of Hours" min={"1"}
              style={{
                width: "50%",
                marginTop: "1rem",
                border: "none",
                padding: "10px",
                textAlign: "center",
                borderRadius: "24px",
               
              }}/>
              <button className="loginBtn" onClick={booked3}>BOOK NOW</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contact">

          <div className="contactDiv">
          <h1>Notify Me</h1>
          <small>Get Notifications to your email </small>
          <form
            action="https://formsubmit.co/mukundraj19cs039@gmail.com"
            method="POST"
          >
            <div className="Details">
            <input type="text" name="name" required placeholder="Name"/>
            <input type="email" name="email" required placeholder="Email-ID"/>
            <button className="loginBtn Notify" type="submit">Notify Me</button>
            </div>
          </form>
          </div>
        </div>
      </section>
    </>
  );
}
