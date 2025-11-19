import React from 'react'

export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="space-y-3">
              <div className="inline-block">
                <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] mb-1">
                  👋 Welcome to my portfolio
                </p>
                <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hello, I'm
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="gradient-text animate-fadeIn">Hadeed Hussain</span>
              </h2>
              
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold">
                    Full Stack <span className="gradient-text font-bold">Web Developer</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I'm a passionate developer crafting <span className="text-white font-semibold">modern</span>, <span className="text-white font-semibold">responsive</span>, and <span className="text-white font-semibold">user-friendly</span> web applications.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Currently pursuing <span className="text-blue-400 font-semibold">Modern Web & App Development</span> at <strong className="text-white font-bold">SMIT</strong>, Karachi. Specialized in React, Node.js, and cutting-edge technologies.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-2">
              <div>
                <p className="text-2xl sm:text-3xl font-bold gradient-text">10+</p>
                <p className="text-gray-400 text-xs sm:text-sm">Projects Done</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold gradient-text">99%</p>
                <p className="text-gray-400 text-xs sm:text-sm">Client Satisfaction</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-bold text-base"
              >
                Hire Me
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="/cv/MyCV.pdf" 
                download
                className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 font-bold text-base border-2 border-white/20 hover:border-blue-500 shadow-lg hover:scale-105"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image - Modern Hexagon Design */}
          <div className="flex flex-col items-center lg:items-end animate-slideInRight space-y-4">
            <div className="relative">
              {/* Hexagon shape with image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
                
                {/* Animated border with rotation */}
                <div className="absolute inset-0 animate-float">
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="33%" stopColor="#8b5cf6" />
                        <stop offset="66%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon 
                      points="100,8 180,48 180,142 100,182 20,142 20,48" 
                      fill="none" 
                      stroke="url(#hexGradient)" 
                      strokeWidth="5"
                      filter="url(#glow)"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
                
                {/* Inner hexagon border */}
                <div className="absolute inset-6">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
                    <polygon 
                      points="100,15 170,52 170,138 100,175 30,138 30,52" 
                      fill="none" 
                      stroke="url(#hexGradient)" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                
                {/* Image container with clip-path */}
                <div className="absolute inset-10 overflow-hidden" style={{clipPath: 'polygon(50% 2%, 92% 27%, 92% 73%, 50% 98%, 8% 73%, 8% 27%)'}}>
                  <div className="w-full h-full bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
                    <img 
                      src="/assets/imgs/Pro.png" 
                      alt="Hadeed Hussain - Frontend Web Developer" 
                      loading="eager"
                      width="384"
                      height="384"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 filter brightness-105" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Connect:</span>
              <div className="flex gap-2">
                <a 
                  aria-label="LinkedIn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://www.linkedin.com/in/hadeedhussainmemon/" 
                  className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 group shadow-lg"
                >
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  aria-label="Github" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://github.com/hadeedhussainmemon" 
                  className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 group shadow-lg"
                >
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  aria-label="Instagram" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://www.instagram.com/hadeedhussainmemon/" 
                  className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110 group shadow-lg"
                >
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  aria-label="X (Twitter)" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://x.com/hadeedhussainmemon" 
                  className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 group shadow-lg"
                >
                  <svg className="w-[14px] h-[14px] text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
