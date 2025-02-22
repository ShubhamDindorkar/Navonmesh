import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="gradient-header">
        <nav className="nav-menu">
          <h2>Logo</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-section">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing things with us</p>
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