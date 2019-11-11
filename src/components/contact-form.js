import React from "react"
import "./contact-form.scss"


const ContactForm = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="c-form__contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button className="c-button__form" type="submit">
        Send
      </button>
    </form>
  )
}

export default ContactForm
