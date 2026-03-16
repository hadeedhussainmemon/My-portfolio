import React, { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      const isDark = saved === 'dark'
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return isDark
    }
    document.documentElement.classList.add('dark')
    return true
  })

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'skills', 'qualification', 'projects', 'contact']
    
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full glass backdrop-blur-xl z-50 py-3 sm:py-4 shadow-xl animate-fadeIn border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl sm:text-2xl font-black gradient-text hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span className="hidden sm:inline">{'<'}</span>
              hadeed-hussain
              <span className="hidden sm:inline">{'>'}</span>
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-4 bg-white/5 p-1 rounded-full border border-white/5">
            {['Home', 'About', 'Services', 'Skills', 'Qualification', 'Projects', 'Contact'].map((item) => {
              const id = item.toLowerCase()
              const isActive = activeSection === id
              return (
                <a 
                  key={item}
                  href={`#${id}`}
                  className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                    isActive 
                      ? 'text-blue-600 dark:text-white bg-blue-500/10 dark:bg-white/10 shadow-sm' 
                      : 'text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              aria-label="toggle theme" 
              onClick={() => setDark(d => !d)} 
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:rotate-12 border border-white/10 shadow-lg"
            >
              {dark ? '🌙' : '☀️'}
            </button>
            <button 
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all text-2xl border border-white/10" 
              onClick={() => setIsOpen(v => !v)} 
              aria-label="open menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav - Full Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-2xl lg:hidden transition-all duration-500 z-[100] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button 
              className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white text-3xl border border-white/10 active:scale-90 transition-all"
              onClick={() => setIsOpen(false)}
              aria-label="close menu"
            >
              ✕
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-1 gap-6 px-6">
            {['Home', 'About', 'Services', 'Skills', 'Qualification', 'Projects', 'Contact'].map((item, index) => {
              const id = item.toLowerCase()
              const isActive = activeSection === id
              return (
                <a 
                  key={item}
                  href={`#${id}`}
                  className={`text-3xl font-black transition-all duration-300 transform ${
                    isActive ? 'text-blue-400 scale-110' : 'text-white hover:text-blue-400'
                  } ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    textShadow: isActive ? '0 0 30px rgba(59, 130, 246, 0.6)' : '0 0 20px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <span className={`${isActive ? 'text-white' : 'text-blue-500'} mr-2 text-xl font-mono`}>0{index + 1}.</span>
                  {item}
                </a>
              )
            })}
          </nav>

          <div className="p-12 flex justify-center gap-6">
            {/* Social Links in Mobile Menu */}
            {[
              { 
                label: 'GitHub', 
                href: 'https://github.com/hadeedhussainmemon', 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
                  </svg>
                )
              },
              { 
                label: 'LinkedIn', 
                href: 'https://www.linkedin.com/in/hadeedhussainmemon/', 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-white/10 active:scale-95 transition-all text-white hover:text-blue-400"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>

  )
}
