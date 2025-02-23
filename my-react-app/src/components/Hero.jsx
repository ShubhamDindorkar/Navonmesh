import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full bg-black flex flex-col items-center justify-center relative p-8">
      {/* Left side - Logo with header background */}
      <div className="absolute left-10 top-10 w-[300px] h-[200px] relative">
        <img 
          src="/assets/header.svg"
          alt="Header Background" 
          className="w-full h-full object-contain"
        />
        <img 
          src="/assets/navonmesh1.svg"
          alt="Navonmesh Logo" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px]"
        />
      </div>

      {/* Right side - Logodes */}
      <div className="absolute right-10 top-10">
        <img 
          src="/assets/logodes.svg"
          alt="Logo Design" 
          className="w-[200px] h-auto object-contain"
        />
      </div>

      {/* Center content - Slogan and Short slogan */}
      <div className="flex flex-col items-center gap-8">
        <img 
          src="/assets/slogan.svg"
          alt="Slogan" 
          className="w-[500px] h-auto object-contain"
        />
        <img 
          src="/assets/shortslogan.svg"
          alt="Short Slogan" 
          className="w-[400px] h-auto object-contain"
        />
      </div>

      {/* Debug information */}
      <div className="absolute bottom-4 left-4 text-white text-xs">
        Debug: Images should be loaded from /assets/
      </div>
    </div>
  )
}

export default Hero 