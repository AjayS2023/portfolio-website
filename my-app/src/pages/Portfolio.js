import React from "react";

function Projects() {

    return (
        <div className="project-container">
            <h1 className="projects-header"> Full-Stack Development Portfolio </h1>
            <div className="card-container">

                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Portfolio Website</h3>
                        <h5 className="card-text">Technologies: React, Node.js, Bootstrap</h5>
                        <button>
                            <a href='https://github.com/AjayS2023/portfolio-website'>Visit Site</a>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Cricket Database</h3>
                        <h5 className="card-text">Technologies: Java</h5>
                        <button>
                            <a href="https://github.com/AjayS2023/portfolio-website">Visit Site</a>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">UNC Charlotte Blog</h3>
                        <h5 className="card-text">Technologies: Go, Gin</h5>
                        <button>
                            <a href="https://github.com/AjayS2023/portfolio-website">Visit Site</a>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Star Wars Trading</h3>
                        <h5 className="card-text">Technologies: MongoDB, Express.js, EJS, Node.js</h5>
                        <button>
                            <a href="https://github.com/AjayS2023/portfolio-website">Visit Site</a>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
