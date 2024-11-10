import React from 'react'

const ContactPage = () => {
  return (

    <section id="contact" className="contact">
    <h2>Get In Touch</h2>
    <div className="contact-container">
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className="primary-btn">Send Message</button>
      </form>
      <div className="contact-info">
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-value">azizh4495@gmail.com</span>
        </div>
        <div className="info-item">
          <span className="info-label">Location:</span>
          <span className="info-value">Karachi</span>
        </div>
      </div>
    </div>
  </section>
    )
}

export default ContactPage