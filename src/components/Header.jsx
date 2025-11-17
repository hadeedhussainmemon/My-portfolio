import React, { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    // Default to dark mode if no preference saved
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

  return (
    <header className="fixed top-0 left-0 w-full glass backdrop-blur-md z-50 py-4 shadow-lg animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
            hadeed-hussain
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Qualification', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-sm font-medium transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              aria-label="toggle theme" 
              onClick={() => setDark(d => !d)} 
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-xl hover:scale-110 transition-all duration-300 hover:rotate-12 hover:shadow-lg"
            >
              {dark ? '🌙' : '☀️'}
            </button>
            <button 
              className="md:hidden text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl" 
              onClick={() => setIsOpen(v => !v)} 
              aria-label="open menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 animate-fadeInUp">
            <nav className="flex flex-col gap-4">
              {['Home', 'About', 'Skills', 'Qualification', 'Projects', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white py-2 hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
