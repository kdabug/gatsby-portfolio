import React from "react"
import "./contact-me.scss"
import ContactList from "./contact-list"
import ContactForm from "./contact-form"

const Contacts = () => {
  return (
    <section id="#contact-me" className="section">
      <div className="contact-container">
        <h1 id="contact-me" className="contact-me-title">
          contact me
        </h1>
        <div className="content-section">
          <ContactList location="section" />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contacts
