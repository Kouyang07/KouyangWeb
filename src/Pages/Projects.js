import "./Resources/Projects.css";
import React  from "react";

const Projects = () => {
    return(
        <div className="PROJECTS">
            <Description />
        </div>
    )
}

const Description = () => {
    return(
        <div className="DESCRIPTION">
            <div className="DESCRIPTION_HEADING">
                <h1>Projects</h1>
            </div>
            <div className="DESCRIPTION">
                <p>Here are some of my projects</p>
            </div>
        </div>
    )
}

export default Projects;