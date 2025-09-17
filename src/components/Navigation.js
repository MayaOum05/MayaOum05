import React from "react";
import "./Nav.css"
import "./ContactButton.css";

function ContactButton () {
    return (
        <div>
            <a href="mailto:maya.oum02@gmail.com">Contact</a>
        </div>
    )
}


function Navigation () {
    return (
        <div>

            <nav className="navbar">

                <a href="https://drive.google.com/file/d/1hdA1D9CcZRDY1panYFohp_GrG-rNjg8j/view?usp=sharing">Resume</a>
                <a href="https://www.linkedin.com/in/maya-oum/">LinkedIn</a>
                <a href="https://github.com/MayaOum05">Github</a>
                
                <ContactButton />
                
            </nav>

        </div>
    )
};

export default Navigation;
export { ContactButton };

