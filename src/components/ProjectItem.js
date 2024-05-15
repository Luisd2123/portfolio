import React from "react";
import { useNavigate } from "react-router-dom";

//Used to navigate through different project 
//Will have more functionality once more projects are added to portfolio
function ProjectItem({image, name, id}) {
    const navigate = useNavigate();
    return (
        <div className="projectItem" 
        onClick={() => {
            navigate("/project/" + id);}}>
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
            <h1> {name} </h1>
        </div>
    );
}

export default ProjectItem;