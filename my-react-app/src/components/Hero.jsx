import React from 'react'

const Hero = () => {
  return (
    <section className="h-[80vh] bg-black flex items-center justify-center font-syne">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">
          IGNITE <span className="text-amber-500">CREATIVITY</span>,<br/>
          IGNITE <span className="text-amber-500">INNOVATION!</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          TECH UNLEASHED: THE ULTIMATE TECH EVENT TO EXPLORE, INNOVATE, AND SHAPE THE FUTURE!
        </p>
        <button className="bg-gradient-to-r from-amber-500 to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-amber-600 hover:to-amber-800 transition-all">
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Hero 