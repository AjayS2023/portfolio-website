import React, { useState, useEffect } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchProjects() {
        const response = await fetch('http://localhost:4000/api/projects');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
    }

    useEffect(() => {
        console.log('useEffect called');
        fetchProjects();
    }, []);

    return (
        <div className="card-container">
            {loading ? (
                <div>Loading...</div>
            ) : (
                projects.map((project) => (
                    <div className="card" key={project._id}>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <p> <a href="github.com"> {project.deployLink} </a> </p>
                            <a href={project.link} className="btn btn-primary">
                                Visit Site
                            </a>
                            {/* erase <a> tag from css later */}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Projects;
