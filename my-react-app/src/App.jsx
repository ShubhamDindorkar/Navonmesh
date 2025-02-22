import { useState } from 'react'
import './App.css'

import universityLogo from './assets/des.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="gradient-header">
        <nav className="header">
          <div className="navonmesh-text">NAVONMESH</div>
          <img src={universityLogo} alt="DES PUNE UNIVERSITY" className="university-logo" />
        </nav>
        <div className="main-content">
          <h1 className="headline">
            IGNITE <span className="highlight">CREATIVITY</span>,<br />
            IGNITE <span className="highlight">INNOVATION!</span>
          </h1>
          <p className="subheadline">
            TECH UNLEASHED: THE ULTIMATE TECH EVENT TO EXPLORE, INNOVATE, AND SHAPE THE FUTURE!
          </p>
          <a href="#" className="cta-button">Explore More</a>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About Us</h2>
        <div className="content">
          <p>We are a company dedicated to excellence and innovation.</p>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of service 1</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of service 2</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of service 3</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your message"></textarea>
          <button className="submit-btn">Send Message</button>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App