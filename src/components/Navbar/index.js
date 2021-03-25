import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
                <Link classNameName="navbar-brand" to="/">
                    <img src="/images/logos/CH-Logo-Horizontal.png" id="ch-header-logo" alt="CH Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        
                        <li className="nav-item active mx-2">
                            <Link
                                to="/Home"
                                classNameName={
                                    window.location.pathname === "/" || window.location.pathname === "/Home"
                                        ? "nav-link active"
                                        : "nav-link"
                                    }
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                to="/Portfolio"
                                classNameName={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                            >
                                Portfolio
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                to="/Contact"
                                classNameName={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;