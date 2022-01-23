import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-dark navBarColor">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 Heading">&#127752;SENSE-ORGANS</span>
                </div>
                <div className="navbarLinkContainer">
                <Link className="navbarLink" to="/">LEARN</Link>
                <Link className="navbarLink" to="quize">QUIZ</Link>
                </div>
            </nav>
        </div>
    )
}