import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.scss"
import ContactList from "./contact-list"

const Footer = () => (
  <footer>
    <ContactList location="footer" />
    <h2>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </h2>
  </footer>
)

export default Footer
