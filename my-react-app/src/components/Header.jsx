import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-amber-800 via-neutral-900 to-amber-800 shadow-md py-4 px-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold text-white font-syncopate">
            Navon<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-600">mesh</span>
          </h1>
        </div>
        <ul className="flex space-x-8 font-syne">
          <li><a href="#home" className="text-gray-200 hover:text-amber-400 transition-colors">Home</a></li>
          <li><a href="#about" className="text-gray-200 hover:text-amber-400 transition-colors">About</a></li>
          <li><a href="#services" className="text-gray-200 hover:text-amber-400 transition-colors">Services</a></li>
          <li><a href="#contact" className="text-gray-200 hover:text-amber-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 