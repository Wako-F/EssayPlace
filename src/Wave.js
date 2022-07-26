import React from "react";

export default function Wave() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
        <rect fill="#ffffff" width="1600" height="900" />
        <defs>
          <linearGradient id="a" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0" stop-color="#0FF" />
            <stop offset="1" stop-color="#CF6" />
          </linearGradient>
          <linearGradient id="b" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#F00" />
            <stop offset="1" stop-color="#FC0" />
          </linearGradient>
        </defs>
        <g fill="#FFF" fill-opacity="0" stroke-miterlimit="10">
          <g stroke="url(#a)" stroke-width="2">
            <path
              transform="translate(0 0)"
              d="M1409 581 1450.35 511 1490 581z"
            />
            <circle
              stroke-width="4"
              transform="rotate(0 800 450)"
              cx="500"
              cy="100"
              r="40"
            />
            <path
              transform="translate(0 0)"
              d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z"
            />
          </g>
          <g stroke="url(#b)" stroke-width="4">
            <path
              transform="translate(0 0)"
              d="M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z"
            />
            <rect
              stroke-width="8"
              transform="rotate(0 1089 759)"
              x="1039"
              y="709"
              width="100"
              height="100"
            />
            <path
              transform="rotate(0 1400 132)"
              d="M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
