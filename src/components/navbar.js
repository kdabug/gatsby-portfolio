import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './navbar.css'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const Header = () => (
  <header className='navbar-container'>
    <h1 >
      <Link to="/">Home</Link>
      <Link to="/#about-me">About</Link>
      <Link to="/#contact-me">Contact</Link>
      <Link to="/#projects">Projects</Link>
    </h1>
  </header>
)

export default Header
