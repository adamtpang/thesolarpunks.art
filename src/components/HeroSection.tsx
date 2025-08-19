'use client'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-solarpunk-green opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-solarpunk-blue opacity-10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-solarpunk-orange opacity-5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          The Solarpunks
        </h1>
        
        <p className="text-xl md:text-2xl text-solarpunk-light/80 mb-8 leading-relaxed">
          Three stories from an optimistic future where technology and nature dance together
        </p>
        
        <div className="mb-12">
          <p className="text-lg text-solarpunk-light/60 mb-4">
            A solarpunk video series crafted for an art contest
          </p>
          <div className="inline-block px-4 py-2 bg-solarpunk-green/20 rounded-full border border-solarpunk-green/30">
            <span className="text-solarpunk-green text-sm font-medium">
              ⚡ Made in a day • {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <button 
          onClick={() => document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' })}
          className="glow-button px-8 py-4 bg-gradient-to-r from-solarpunk-green to-solarpunk-blue rounded-full text-black font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Watch Episodes
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-solarpunk-green/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-solarpunk-green rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}