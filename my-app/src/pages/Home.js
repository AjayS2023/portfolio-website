import React from "react";

function Home() {
    return (
        <div className="home-page">
            <div className="content">
                <h1 className="header"> Aspiring Fullstack Developer</h1>
                <p>
                    Hi. I'm Ajay, a computer science enthusiast with passion for
                    building fullstack applications. Welcome to my personal website. It has been created
                    using the MERN stack - MongoDB, Express.js, React, and Node.js.
                </p>
                <p> This page showcases some of my projects<a href="/projects">here.</a>
                    You can see all of my projects in<a href="https://github.com/AjayS2023">my Github repo.</a>
                    If you would like to contact me, you can do so through<a href="https://www.linkedin.com/in/ajay-shankar2023/">LinkedIn.</a>
                    Please enjoy my website!
                </p>
            </div>
        </div>

    );
}

export default Home;