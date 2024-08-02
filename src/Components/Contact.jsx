import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/home" className="homee">Home</a>
          </li>
          <li className="nav-item">
            <a href="/Plan" className="wwe">Plan</a>
          </li>
          <li className="nav-item">
            <a href="/trainer" className="wwf">Tracker</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="wwe">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="wwf">Contact us</a>
          </li>
        </ul>
      </nav>

      <div className='about-content'>
        <div className="contact-container">
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
            <div className="contact-left-title">
              <h2 className='gt'>Get in touch</h2>
              <hr />
            </div>
            <input type="hidden" name="access_key" value="6113e978-761f-499c-b579-e9d7538eb838" />
            <input type="text" name="name" placeholder="Enter Your Name" className="contact-inputs" required />
            <input type="email" name="email" placeholder="Enter Your Email" className="contact-inputs" required />
            <textarea name="message" placeholder="Your Message" className="contact-inputs"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
