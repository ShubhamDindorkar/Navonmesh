import React from 'react'
import desLogo from '../assets/des.png'
import rectangle2 from '../assets/rectangle2.png'

const Header = () => {
  return (
    <header 
      className="relative py-4 px-8"
      style={{
        backgroundImage: `url(${rectangle2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold text-white font-syncopate">
            Navon<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-600">mesh</span>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex space-x-8 font-syne">
            <li><a href="#home" className="text-gray-200 hover:text-amber-400 transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-200 hover:text-amber-400 transition-colors">About</a></li>
            <li><a href="#services" className="text-gray-200 hover:text-amber-400 transition-colors">Services</a></li>
            <li><a href="#contact" className="text-gray-200 hover:text-amber-400 transition-colors">Contact</a></li>
          </ul>
          <img 
            src={desLogo} 
            alt="DES Logo" 
            className="h-16 w-auto"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header 