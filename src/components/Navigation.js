import React from "react";
import "./Nav.css"

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFile } from 'react-icons/fa';


function Navigation () {
    return (
        <div>

            <nav className="navbar">

                <a href="\app.js" className="logo">MO</a>

                <a href="#Experience.js">Experience</a>
                <a href="#Projects.js">Projects</a>
                <a href="#Skills.js">Skills</a>

                <a href="https://drive.google.com/file/d/1hdA1D9CcZRDY1panYFohp_GrG-rNjg8j/view?usp=sharing">
                <FaFile />
                </a>
                <a href="https://www.linkedin.com/in/maya-oum/">
                <FaLinkedin />
                </a>

                <a href="https://github.com/MayaOum05" >
                    <FaGithub />
                </a>
                
                                
            </nav>

        </div>
    )
};

export default Navigation;

