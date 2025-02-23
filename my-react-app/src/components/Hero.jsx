import React from 'react'
import heroImage from '../assets/hero.png'
import rectangle1 from '../assets/rectangle1.png'

const Hero = () => {
  return (
    <section className="h-[90vh] bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full opacity-50"
        style={{
          backgroundImage: `url(${rectangle1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between relative z-10">
        <div className="text-left max-w-2xl">
          <h1 className="text-6xl font-bold mb-4 text-white font-syncopate">
            IGNITE <span className="text-amber-500">CREATIVITY</span>,<br/>
            IGNITE <span className="text-amber-500">INNOVATION!</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-syne">
            TECH UNLEASHED: THE ULTIMATE TECH EVENT TO EXPLORE, INNOVATE, AND SHAPE THE FUTURE!
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-amber-600 hover:to-amber-800 transition-all font-syne">
            Explore More
          </button>
        </div>
        
        <div className="flex-1 flex justify-end">
          <img 
            src={heroImage} 
            alt="Hero" 
            className="max-h-[70vh] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero 