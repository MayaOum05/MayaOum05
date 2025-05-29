import React from "react";
import "./Nav.css"
import "./ContactButton.css";

function ContactButton () {
    return (
        <div>
            <button link="maya.oum02@gmail.com">Contact</button>
        </div>
    )
}



function Navigation () {
    return (
        <div>

            <nav className="navbar">

                <a href="#resume">Resume</a>
                <a href="#linkedin">LinkedIn</a>
                <a href="#github">Github</a>
                
                <ContactButton />
                
            </nav>

        </div>
    )
};

export default Navigation;
export { ContactButton };

