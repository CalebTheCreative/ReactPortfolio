import React from "react";
import "./style.css";
// import { Card, Col, Container, Row } from "react-bootstrap";

function Projects(props) {
    return (
        <div class="col-12 card mb-3 col-xl-3 mx-3">
            <img src={props.img} class="card-img-top mt-2" alt="Code Quiz" />
            <div class="card-body">
                <h3 class="card-title text-dark">{props.title}</h3>
                <div>
                    <a href={props.live} class="mx-2" target="_blank" alt="Live icon" rel="noreferrer">
                        <button class="btn ch-proj-btn"><i class="fas fa-play-circle"></i>
                                Live</button>
                    </a>
                    <a href={props.repo} class="mx-2" target="_blank"
                        alt="Github icon" rel="noreferrer">
                        <button class="btn ch-proj-btn"><i class="fab fa-github"></i> Repo</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;