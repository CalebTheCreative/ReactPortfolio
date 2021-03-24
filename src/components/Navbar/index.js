import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src="/images/logos/CH-Logo-Horizontal.png" id="ch-header-logo" alt="CH Logo" />
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/Home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Portfolio"
                            className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
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