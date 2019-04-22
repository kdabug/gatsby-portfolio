import React from "react"
import "./contact-me.scss"
import { contactList } from "../data/contacts.js"

const ContactMe = () => {
  return (
    <section id="#contact-me" className="section">
      <h1 id="contact-me">CONTACT</h1>
      <div className="contact-container">
        {contactList.map(contact => {
          console.log(contact)
          return (
            <div className="contact-info" key={contact.url}>
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`link to my ${contact.name} account`}
                className="btn-social-icon"
                rel="noopener noreferrer"
              >
                <img
                  src={contact.icon}
                  alt={` link to my ${contact.name} account`}
                />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ContactMe
