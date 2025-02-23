import React from 'react'


const Header = () => {
  return (
    <header className="w-full bg-black text-white py-4">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/assets/navonmesh1.svg" alt="Navonmesh Logo" className="h-8" />
          </div>
          <div className="flex items-center space-x-4">
            <img src="/assets/logodes.svg" alt="Logo Design" className="h-8" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 