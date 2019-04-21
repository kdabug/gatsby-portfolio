import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./navbar.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const Header = () => (
  <header className="navbar-container">
    <h1>
      <Link to="/#title">@kdabug</Link>
      <Link to="/#about-me">@about</Link>
      <Link to="/#contact-me">@contact</Link>
      <Link to="/#projects">@projects</Link>
    </h1>
  </header>
)

export default Header
