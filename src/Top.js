import React from "react";

export default function Top() {
  return (
    <nav class="navbar backgroundsvg    navbar-expand-lg ">
      <div class="container ">
        <a class=" logo navbar-brand fs-1 col-6" href="#">
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
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav row">
            <li class="nav-item col ">
              <a
                class="nav-link fw-semibold fs-5 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item  col">
              <a class="nav-link fw-semibold fs-5" href="#">
                Features
              </a>
            </li>
            <li class="nav-item col">
              <a class="nav-link fw-semibold fs-5" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item dropdown col">
              <a
                class="nav-link fw-semibold fs-5 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
