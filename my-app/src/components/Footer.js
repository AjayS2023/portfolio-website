import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (

        <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/" className='nav-link'>LinkedIn</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;