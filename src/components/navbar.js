import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const Header = () => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link to="/">Home</Link>
      <Link to="/#about-me">About</Link>
      <Link to="/#contact">Contact</Link>
      <Link to="/#projects">Projects</Link>
    </h1>
  </header>
)

export default Header
