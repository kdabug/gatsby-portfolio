import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./navbar.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', { offset: 100 })
}
const Header = () => (
  <header className="navbar-container">
    <Link to="/#title">kdabug</Link>
    <Link to="/#about-me">about</Link>
    <Link to="/#projects">projects</Link>
    <Link to="/#contact-me">contact</Link>
  </header>
)

export default Header
