import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">My Website</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/projects" className="nav-link">Projects</Link>
                        <Link to="/skills" className='nav-link'> Skills </Link>
                        <Link to="/contact" className='nav-link'>Contact</Link>                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;