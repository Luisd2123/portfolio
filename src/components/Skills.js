import React from "react";
import "../styles/Skills.css";
//Skills Page containing all skills I have gained from school
function Skills() {
    return (
        <div className="skills">
            <h1> Skills </h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>
                        HTML, CSS, ReactJS, NPM
                    </span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>
                        C++, C#, Swift, Python, Java, JavaScript
                    </span>
                </li>
                <li className="item">
                    <h2>Professional Skills</h2>
                    <span>
                        Well Organized, Billigual, Collaboration, 
                        Problem Solving, Patience, Responsible
                    </span>
                </li>
            </ol>

        </div>
    );
}

export default Skills;