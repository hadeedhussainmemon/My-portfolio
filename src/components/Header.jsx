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
            {['Home', 'About', 'Skills', 'Qualification', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-sm font-bold transition-all duration-300 rounded-full hover:bg-white/10"
              >
                {item}
              </a>
            ))}
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

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-6 pt-2 animate-fadeInUp border-t border-white/5 mt-2">
          <nav className="flex flex-col gap-3">
            {['Home', 'About', 'Skills', 'Qualification', 'Projects', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white py-3 hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 font-bold glass rounded-xl px-4"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
