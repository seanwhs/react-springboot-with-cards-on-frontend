// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CoderzUnited
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/tutorials-list">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Tutorial
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tutors-list">
                Tutors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-tutor">
                Add Tutor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
