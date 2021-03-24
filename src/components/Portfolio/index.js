import React from "react";
import Projects from "../Projects";
import portproj from "./portproj.json";

function Portfolio() {
    return (
        <section className="ch-section" id="ch-portfolio">
            <div className="container-fluid">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                    <h1 className="mb-4 ch-section-title">FEATURED PROJECTS</h1>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    {portproj.map((proj) => (
                        <Projects
                        key={proj.id}
                        title={proj.title}
                        img={proj.img}
                        live={proj.live}
                        repo={proj.repo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;