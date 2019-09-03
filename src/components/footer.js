import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.scss"
import ContactList from "./contact-list"

const Footer = () => (
  <footer>
    <ContactList location="footer" />
  </footer>
)

export default Footer
