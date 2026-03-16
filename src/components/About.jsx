import React from 'react'
import Skeleton from './Skeleton'

export default function About({ isLoading }) {
  if (isLoading) {
    return (
      <section id="about" className="py-12 bg-slate-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <Skeleton variant="card" className="aspect-square rounded-3xl" />
            </div>
            <div className="lg:col-span-3 space-y-6">
              <Skeleton variant="text" className="w-24 h-4" />
              <Skeleton variant="title" className="w-64 h-12" />
              <Skeleton variant="text" className="w-full h-24" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton variant="card" className="h-24" />
                <Skeleton variant="card" className="h-24" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  width="500"
                  height="500"
                  loading="lazy"
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
                I'm a <span className="text-white font-semibold">creative MERN stack developer</span> who transforms ideas into exceptional digital experiences. With a passion for clean code and elegant design, I specialize in building modern, responsive web applications.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                As the <span className="text-blue-400 font-semibold">Co-founder of <a href="https://www.technosedigital.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 underline underline-offset-4 decoration-blue-500/50 transition-colors">Technose Digital</a></span>, I lead a team of talented professionals delivering comprehensive digital services. We specialize in everything from web development to digital branding, helping businesses thrive in the modern era.
              </p>
              
              {/* Premium Achievement Cards for AI & Visual Wow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {[
                  { icon: '🏢', title: 'Agency Founder', desc: 'Co-founder @ Technose', color: 'pink' },
                  { icon: '📊', title: 'Data Scientist', desc: 'VU Pakistan (2025-29)', color: 'green' },
                  { icon: '🎓', title: 'MERN Specialist', desc: 'Certified Professional', color: 'blue' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="glass p-5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.05] active:scale-95 group cursor-default relative overflow-hidden"
                  >
                    <div className={`absolute -right-4 -bottom-4 w-20 h-20 bg-${item.color}-500 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                        role="img"
                        aria-label={item.title}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-black text-sm uppercase tracking-wider">{item.title}</h3>
                        <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-white font-bold mb-3 flex items-center gap-2 relative z-10">
                  <span className="text-blue-500 text-lg">💡</span> Professional Identity
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed italic relative z-10">
                  Hadeed Hussain is a distinguished <strong>MERN Stack Developer</strong>, <strong>Agency Co-founder</strong>, and <strong>BS Data Science Student</strong>. An alumnus of the <strong>University of Leeds</strong> and currently pursuing a degree at the <strong>Virtual University of Pakistan</strong>, he leads digital transformation at <strong>Technose Digital</strong>. His technical foundation is further strengthened by advanced certifications in Modern Web & App Development.
                </p>
              </div>

              <p className="text-gray-300 text-base leading-relaxed">
                With a focus on <span className="text-blue-400 font-semibold">High-Scale Web Architecture</span>, I combine academic rigorousness with a MERN stack-focused mindset to deliver innovative solutions for global clients.
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
            
            {/* Elite Action buttons */}
            <div className="flex flex-wrap gap-5 pt-8">
              <a 
                href="/cv/MyCV.pdf" 
                download
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 font-black uppercase tracking-widest text-sm border border-white/10"
              >
                Resume
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-3 glass px-10 py-4 rounded-2xl hover:bg-white/10 transition-all duration-500 font-black uppercase tracking-widest text-sm border border-white/10 hover:border-blue-500/50 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                Let's Talk
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
