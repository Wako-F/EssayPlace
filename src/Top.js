import React from "react";
import logo from "./logo.png";

export default function Top() {
  return (
    <nav className="nav-bar">
      <div className="container pt-3">
        <div className="row">
          <a className="navbar-brand  col-4" href="#">
            {" "}
            <img src={logo} width="100" height="100" />
          </a>

          <span className="col nav-item">About Us </span>

          <span className="col nav-item">Pricing </span>
          <span className="col nav-item">Hire a writer </span>
          <span className="col"> </span>
          <span className="col"> </span>
        </div>
      </div>
    </nav>
  );
}
export { logo };
