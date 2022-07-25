import React from "react";
import logo from "./logo.png";

export default function Top() {
  return (
    <nav className="nav-bar">
      <div className="container pt-3">
        <div className="row">
          <a className="navbar-brand col-6" href="#">
            {" "}
            <img src="../logo.png" width="100" height="80" />
          </a>

          <span className="col">About Us </span>

          <span className="col">Pricing </span>
          <span className="col">Hire a writer </span>
          <span className="col"> </span>
          <span className="col"> </span>
        </div>
      </div>
    </nav>
  );
}
export { logo };
