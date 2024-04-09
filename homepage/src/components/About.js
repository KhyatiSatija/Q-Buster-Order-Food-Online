import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import {BsFillPlayCircleFill} from "react-icons/bs";

const About = () => {
  return <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="Backgorund"/>
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="About Food Bowl"/>
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading" >
                    Food Is an Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <p className="primary-text">
                Llaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button"> 
                    {""}
                    <BsFillPlayCircleFill/>Watch Video
                    </button>
                </div>
            </div>
  </div>;
};

export default About;