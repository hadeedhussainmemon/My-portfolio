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
              { icon: 'github', href: 'https://github.com/hadeedhussainmemon' },
              { icon: 'linkedin', href: 'https://www.linkedin.com/in/hadeedhussainmemon/' }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-white/10 active:scale-95 transition-all text-white"
                aria-label={social.icon}
              >
                <img src={`https://cdn.simpleicons.org/${social.icon}/white`} className="w-6 h-6" alt={`${social.icon} icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>

  )
}
