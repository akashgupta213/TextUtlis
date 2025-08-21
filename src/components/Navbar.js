import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
    
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>

          {/* Darkmode Switch */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label
              className="form-check-label mx-3"
              htmlFor="switchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired, //the isRequired property impose that it is necessary to provide titile otherwise it will give error. if the isrequired property is imposed and the default propert is also appplied to the component then it will not show the error.
  link: PropTypes.string,
};

//Default prop are nothing just  if we are passing thee props and we forget to pass the props tho yeh jo default props jo hai wo bydefault set hoojate hai

Navbar.defaultProps = {
  title: "Set title here",
  link: "set the link here",
};
