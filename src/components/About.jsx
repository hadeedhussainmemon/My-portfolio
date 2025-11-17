import React from 'react'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left side - Image */}
          <div className="lg:col-span-2 animate-slideInLeft">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-purple-500 rounded-br-3xl opacity-50"></div>
              
              {/* Gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="/assets/imgs/about.jpg" 
                  alt="Hadeed Hussain" 
                  className="relative w-full aspect-square object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:col-span-3 space-y-6 animate-slideInRight">
            {/* Section header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Get to know</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-gray-400 text-base">Passionate Developer & Tech Enthusiast</p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-300 text-base leading-relaxed">
                I'm a <span className="text-white font-semibold">creative web developer</span> who transforms ideas into exceptional digital experiences. With a passion for clean code and elegant design, I specialize in building modern, responsive web applications.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Currently studying <span className="text-blue-400 font-semibold">Modern Web & App Development</span> at <strong className="text-white">SMIT</strong>, I combine technical expertise with a problem-solving mindset to deliver innovative solutions.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">08+</div>
                <div className="text-xs text-gray-400 font-medium">Projects<br/>Completed</div>
              </div>
              <div className="glass p-4 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">01</div>
                <div className="text-xs text-gray-400 font-medium">Modules<br/>Done</div>
              </div>
              <div className="glass p-4 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">100%</div>
                <div className="text-xs text-gray-400 font-medium">Client<br/>Satisfaction</div>
              </div>
            </div>

            {/* Key skills badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-gray-300 border border-white/10">React.js</span>
              <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-gray-300 border border-white/10">JavaScript</span>
              <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-gray-300 border border-white/10">Tailwind CSS</span>
              <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-gray-300 border border-white/10">Node.js</span>
              <span className="px-4 py-2 glass rounded-full text-xs font-semibold text-gray-300 border border-white/10">UI/UX Design</span>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-bold" 
                href="/cv/MyCV.pdf" 
                download
              >
                Download CV
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 font-bold border-2 border-white/20 hover:border-blue-500 shadow-lg hover:scale-105"
              >
                Let's Talk
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
