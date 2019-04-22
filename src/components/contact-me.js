import React from "react"
import "./contact-me.scss"
import { contactList } from "../data/contacts.js"
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaEnvelopeSquare,
  FaLinkedin,
} from "react-icons/fa"

const ContactMe = () => {
  return (
    <section id="#contact-me" className="section">
      <div className="contact-container">
        <h1 id="contact-me" className="contact-me-title">
          contact me
        </h1>
        {contactList.map(contact => {
          console.log(contact)
          return (
            <div className="contact-info" key={contact.url}>
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-icon"
                rel="noopener noreferrer"
              >
                {contact.comp}
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ContactMe
