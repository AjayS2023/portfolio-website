import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <p>&copy; Ajay Shankar. All Rights Reserved.</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/ajay-shankar2023/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={43}/>
                </a>
                <a href="https://github.com/AjayS2023" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={43}/>
                </a>
            </div>
        </div>
    );
}

export default Footer;