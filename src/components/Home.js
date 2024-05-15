import React from "react";
//Using css for home.css
import "../styles/Home.css";

//HomePage displaying Name, prompt and Contact information 
function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Luis Dominguez</h2>
                <div className="prompt">
                    <p>I am a computer science major enrolled at California State University
                        of Fullerton with a passion for creating and learning.
                    </p>
                </div>
            </div>
            <div className="contact">
                <h1>Contact Information</h1>
                <ol className="list">
                    <li className="item">Number: (951)258-5625</li>
                    <li className="item">Discord: Luisdpato</li>
                    <li className="item">Email: Luisd212@csu.fullerton.edu</li>
                </ol>
            </div>
        </div>
    );
}

export default Home;