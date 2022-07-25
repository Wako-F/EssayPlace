import React from "react";

export default function Features() {
  return (
    <div className="text-center">
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Columns with icons</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#collection" />
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="icon-link d-inline-flex align-items-center">
              Call to action
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#people-circle" />
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="icon-link d-inline-flex align-items-center">
              Call to action
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#toggles2" />
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="icon-link d-inline-flex align-items-center">
              Call to action
              <svg class="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
