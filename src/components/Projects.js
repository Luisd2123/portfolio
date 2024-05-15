import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/Project.css";
import { ProjectList } from "./ProjectList";

//Project Page containing all projects on portfolip 
function Projects() {
    return (
        <div className="projects"> 
        <h1>My Personal Projects</h1>
        <div className="projectList">
            {ProjectList.map((project, index) => {
                return <ProjectItem id={index} name={project.name} image={project.image} /> 
            })}
        </div>
        </div>)
    ;
}

export default Projects;