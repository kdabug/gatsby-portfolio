import React from "react"

import "./lavalamp.scss"

const Lavalamp = () => (
  <div className="lava-container">
    <div className="blobs">
      <div className="blob" />
      <div className="blob" />
      <div className="blob" />
      <div className="blob" />
      <div className="blob" />
      <div className="blob" />
      <div className="blob" />
      <div className="blob" />
      <div className="goop top-goop" />
      <div className="goop bot-goop" />
    </div>

    <svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
)

export default Lavalamp
