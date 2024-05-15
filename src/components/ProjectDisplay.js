import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";
import "../styles/ProjectDisplay.css";
import { Link } from "react-router-dom";

//Page after clicking on project 
//Contains Picture along with name and links to github and actual website
//done for project 1 for this class
function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img src={project.image}/>
            <Link to="https://github.com/Robotaco23/websitetest">
                <button>
                    Github Link
                </button>
            </Link>
            <Link to="https://robotaco23.github.io/websitetest/">
                <button type="button">
                    Continue to Website
                </button>
            </Link>
        </div>
    );
}

export default ProjectDisplay;