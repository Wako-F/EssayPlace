import React from "react";

export default function Top() {
  return (
    <nav class="navbar  navbar-expand-lg py-0">
      <div class="container ">
        <a class=" logo navbar-brand fs-1 text-white-50 col-6" href="#">
          {" "}
          EssayPlace
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse  justify-content-end navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav d-flex row">
            <li class="nav-item col ">
              <a class="nav-link " href="#">
                Features
              </a>
            </li>
            <li class="nav-item col ">
              <a class="nav-link " href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item col ">
              <a class="nav-link " href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
