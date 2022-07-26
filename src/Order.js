import React from "react";

export default function Order() {
  return (
    <div className="backgroundorder">
      <div>
        <div className="container pt-5">
          <div className="row">
            <div className="col"></div>
            <div className="col text-centered ">
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
            </div>
            <div className="col">
              <p className="fw-bold fs-1 "> Quick and Efficient </p>
              <p className="fs-5">
                {" "}
                Essayplace simplifies the entire process and assures clients of
                excellent essays by linking you to the perfect writer.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
