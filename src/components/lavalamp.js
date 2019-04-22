import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./lavalamp.scss"

const Lavalamp = () => (
  <div className="lava-containter">
    <div class="blobs">
      <div class="blob" />
      <div class="blob" />
      <div class="blob" />
      <div class="blob" />
      <div class="blob" />
      <div class="blob" />
      <div class="blob" />
      <div class="blob" />
      <div class="goop top-goop" />
      <div class="goop bot-goop" />
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
