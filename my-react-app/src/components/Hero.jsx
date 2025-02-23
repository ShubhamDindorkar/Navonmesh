import React from 'react'

const Hero = () => {
  return (
    <section className="h-[80vh] bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your compelling tagline goes here
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Hero 