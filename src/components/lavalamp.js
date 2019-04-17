import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./lavalamp.scss"

const Lavalamp = () => (
  <div class="container">
    <div class="top">
      <div class="wrapper">
        <div class="cap" />
      </div>
    </div>
    <div class="mid">
      <div class="wrapper">
        <div class="glass">
          <div class="blob" />
          <div class="blob" />
          <div class="blob" />
          <div class="blob" />
          <div class="blob" />
          <div class="goop top-goop" />
          <div class="goop bot-goop" />
        </div>
      </div>
    </div>
    <div class="upperBase">
      <div class="wrapper">
        <div class="base" />
      </div>
    </div>
    <div class="lowerBase">
      <div class="wrapper">
        <div class="base" />
      </div>
    </div>
  </div>
)

export default Lavalamp
