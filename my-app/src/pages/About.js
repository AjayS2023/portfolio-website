import React from "react";
import ProfessionalImage from '../images/ProfessionalImage.jfif';

function About() {
    return (
        <div className="about-container">

            <div className="content">
                <h1 className="header">About Ajay Shankar</h1>
                <img src={ProfessionalImage} alt="Ajay Shankar"/>
                <p>
                    I am a Computer Science student at the University of North Carolina
                    at Charlotte. My main interests lie in fullstack development. Building modern websites
                    require nuance as well as understanding of the underlying systems, which is
                    why I strive to keep up with the constantly evolving technologies.
                </p>

                <p>
                    As an aspiring fullstack developer, I have experience with using the stack
                    to create powerful, responsive websites. Some of the technologies, frameworks, and stacks I have used are:
                </p>
                <ul>
                    <li>Flask + Bootstrap + Postgres</li>
                    <li>The MERN Stack (MongoDB, Express, React, Node)</li>
                    <li>Flutter and Firebase</li>
                    <li>Java</li>
                    <li>HTML, CSS, JavaScript</li>
                </ul>

            </div>
        </div>
    );
}

export default About;