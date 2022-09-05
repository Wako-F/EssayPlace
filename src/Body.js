import React from "react";
import EssayPlaceBody from "./EssayPlaceBody.png";
export default function Body() {
  return (
    <div className="   backgroundsvg bg-opacity-75">
      <div class="container col px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={EssayPlaceBody}
              class="d-block  mx-lg-auto img-fluid"
              alt="EssayPlace"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6 ">
            <h1 class="display-5 fw-bold lh-sm mb-3">
              More Than An Essay Writing Service
            </h1>
            <p class="lead lh-base">
              EssayPlace is a renowned tutoring website with a team of qualified
              and experienced writers. With our <strong>client-first</strong>{" "}
              approach, EssayPlace guarantees quality a smooth process, from
              order to completion.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {" "}
        <div className="row">
          {" "}
          <div className="col"> </div> <div className="col-3"> </div>{" "}
          <div className="col"> </div>
        </div>
      </div>{" "}
    </div>
  );
}
export { EssayPlaceBody };
