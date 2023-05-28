import React, { useState, useEffect } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchProjects() {
        const response = await fetch('https://my-portfolio-server-440s.onrender.com/api/projects');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
    }

    useEffect(() => {
        console.log('useEffect called');
        fetchProjects();
    }, []);

    return (
        <div className="project-container">
            <h1 className="projects-header"> Full-Stack Development Portfolio </h1>
            <div className="card-container">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    projects.map((project) => (
                        <div className="card" key={project._id}>
                            <div className="card-body">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-text">{project.description}</p>
                                <h5 className="card-text">Technologies: {project.techUsed}</h5>
                                <button>
                                    <a href={project.githubLink}>Visit Site</a>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Projects;
