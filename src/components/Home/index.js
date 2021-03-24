import React from "react";
import "./style.css";

function Home() {
    return (
        <div className="ch-header">
            <img id="computer-bg" src="images/background/Computer-BG.jpg" alt="CH Background" />
            <div className="ch-bg-overlay"></div>
            <div className="ch-header-content">
                <h1 className="text-light text-center" id="ch-header-1"><span className="makeBlue">Hey there</span>, I'm Caleb.</h1>
                <h3 className="makeBlue-text text-center" id="ch-header-2">I'm a full-stack web developer from San Antonio, TX.
                </h3>
                <div className="d-flex justify-content-center" id="ch-header-icons">
                <a href="https://github.com/CalebTheCreative" className="mx-2" target="_blank" alt="Github icon" rel="noreferrer"><i
                className="fab fa-github-square fa-3x skyblue"></i></a>
                    
                <a href="https://www.linkedin.com/in/calebthecreative/" className="mx-2" target="_blank"
                alt="LinkedIn icon" rel="noreferrer"><i className="fab fa-linkedin fa-3x skyblue"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home;