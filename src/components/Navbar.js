import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://ravee.in/" target="_blank" rel="noreferrer">{props.NavLink1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://textutility.ravee.in/" target="_blank" rel="noreferrer">{props.NavLink2}</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    NavLink1: PropTypes.string.isRequired,
    NavLink2: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Error Text",
    NavLink1: "Error Text",
    NavLink2: "Error Text"
}