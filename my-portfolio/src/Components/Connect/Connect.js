import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Connect.css";

const Connect = () => {
    return(
        <div id="connect">
            <a href="https://github.com/restituo">
                <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
            </a>
            <a className="middle-icon" href="https://www.linkedin.com/in/richardcengineer/">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="3x" />
            </a>
            <a href="mailto:rcc999@comcast.net">
                <FontAwesomeIcon icon={["fab", "envelope"]} size="3x" />
            </a>
        </div>
    );
}

export default Connect;