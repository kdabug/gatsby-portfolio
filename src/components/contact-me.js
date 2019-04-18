import React from "react"
import "./contacts.css"
import contactList from "../data/contacts.json"

const Contacts = () => {
  return (
    <section id="#contact" className="section contact">
      <h1 id="contact">CONTACT</h1>
      <div className="contact-container">
        {contactList.map(contact => (
          <div className="contact-info" key={contact.url}>
            <a
              href={contact.url}
              target="_blank"
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
        ))}
      </div>
    </section>
  )
}

export default Contacts
