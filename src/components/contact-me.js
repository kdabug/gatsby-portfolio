import React from "react"
import "./contact-me.scss"
import ContactList from "./contact-list"

const Contacts = () => {
  return (
    <section id="#contact-me" className="section">
      <div className="contact-container">
        <h1 id="contact-me" className="contact-me-title">
          contact me
        </h1>
        <ContactList location="section" />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contacts
