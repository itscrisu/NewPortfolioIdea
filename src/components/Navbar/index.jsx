import React from "react";

export default function CustomNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar--elements">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Experiencia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Proyectos
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar--icons">
        <ul className="social--icons">
          <li>
            <a href="#">
              <i className="fab fa-linkedin icon-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github-square"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
