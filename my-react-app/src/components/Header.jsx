import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold">
            Navon<span className="text-blue-600">mesh</span>
          </h1>
        </div>
        <ul className="flex space-x-8">
          <li><a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 