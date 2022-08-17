import React from "react";
import bodyImage from "./bodyImage.png";
export default function Order() {
  return (
    <div className="backgroundorder">
      <div>
        <div className="container pt-5">
          <div className="row">
            {/* <div className="col text-centered ">
              <div class=" ">
                <div class="card-body">
                  <h5 class="card-title ">Place an Order</h5>
                  <form>
                    <label class="form-label form-text">Email:</label> <br />
                    <input type="email" /> <br />
                    <label class="form-label form-text">
                      Type of Paper{" "}
                    </label>{" "}
                    <br />
                    <select>
                      {" "}
                      option value="200"Essay (any type)
                      <option />
                      <option value="10">Admission essay</option>
                      <option value="20">Annotated bibliography</option>
                      <option value="30">Argumentative essay</option>
                      <option value="40">Article review</option>
                      <option value="60">Book/movie review</option>
                      <option value="70">Business plan</option>
                      <option value="90">Case study</option>
                      <option value="100">Coursework</option>
                      <option value="110">Creative writing</option>
                      <option value="120">Critical thinking</option>
                      <option value="210">Presentation or speech</option>
                      <option value="220">Research paper</option>
                      <option value="230">Research proposal</option>
                      <option value="240">Term paper</option>
                      <option value="270">Thesis/Dissertation chapter</option>
                      <option value="10000">Other</option>
                    </select>{" "}
                    <br />
                    <label class="form-label form-text">
                      No of Pages:
                    </label>{" "}
                    <br />
                    <input type="number" /> <br />
                    <label class="form-label form-text">Deadline:</label> <br />
                    <input type="date" /> <br />
                    <button
                      type="submit"
                      class="btn btn-primary text-centered mt-3"
                    >
                      Order
                    </button>
                  </form>
                </div>
              </div>
            </div> */}
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={bodyImage}
                class="d-block  mx-lg-auto img-fluid"
                alt="EssayPlace"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 class="display-5 fw-bold lh-2 mb-3">
                Responsive left-aligned hero with image
              </h1>
              <p class="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
