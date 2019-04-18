import React from "react"
import "./contacts.css"
import contactList from "../data/contacts.js"

const Contacts = () => {
  return (
    <section id="projects" className="section contact">
      <h1 id="contact">CONTACT</h1>
      <div className="row text-center section-content">
        {contactList.map(contact => (
          <div className="col-sm-2" key={contact.url}>
            <a
              href={contact.url}
              target="_blank"
              title={`External link to my ${contact.name} account`}
              className="btn-social-icon"
              rel="noopener noreferrer"
            >
              <span
                className={`fa fa-${contact.icon}`}
                alt={`External link to my ${contact.name} account`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contacts
