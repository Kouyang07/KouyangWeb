import "./Resources/Projects.css";
import {Button, Badge} from "react-bootstrap";
import React  from "react";

const Projects = () => {
    return(
        <div className="PROJECTS">
            <Description />
            <Project />
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

const Project = () => {
    return(
        <div>
            <h1>Project</h1>
        </div>
    )
}

export default Projects;