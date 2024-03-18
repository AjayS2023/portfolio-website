import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><Link to="/projects"> Projects </Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;