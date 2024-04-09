import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";


const Testimonial = () => {
  return <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">What They're Saying</h1>
                <p className="primary-text">
                purus faucibus ornare suspendisse sed nisi lacus. Interdum velit laoreet id donec ultrices 
                tincidunt arcu non sodales. Nunc sed velit dignissim sodales ut. Enim lobortis scelerisque
                 fermentum dui faucibus in ornare.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="profile picture" />
                <p>
                faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Placerat orci nulla pellentesque
                 dignissim enim sit amet. Consequat semper viverra nam libero justo laoreet sit amet cursus. Diam 
                 vel qu
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>John Doe</h2>
            </div>
  </div>;
};

export default Testimonial;