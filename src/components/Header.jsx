import React, { useState, useEffect } from 'react'
import { AnimatedBackground } from './core/animated-background'
import { Home, User, Briefcase, FileText, FolderGit2, Code2, Mail } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'qualification', 'projects', 'skills', 'contact']
    
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
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

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'qualification', label: 'Journey', icon: FileText },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-4 sm:pt-6 pointer-events-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pointer-events-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-0">
          
          {/* Left Text - Logo */}
          <div className="hidden xl:block flex-1 font-display text-3xl text-zinc-900 tracking-wide uppercase leading-none drop-shadow-sm">
            HHM
          </div>

          {/* Center Navbar */}
          <div className="flex-none bg-white/90 backdrop-blur-md border border-zinc-200/80 rounded-full p-1.5 shadow-sm max-w-[95vw] sm:max-w-max mx-auto overflow-x-auto scrollbar-none">
            <div className="flex space-x-1 min-w-max">
              <AnimatedBackground
                defaultValue={activeSection}
                onValueChange={(val) => {
                  const el = document.getElementById(val)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-full bg-zinc-100"
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.3,
                }}
              >
                {navItems.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      data-id={tab.id}
                      type="button"
                      className={`inline-flex px-3.5 py-3 sm:px-5 sm:py-2.5 items-center justify-center transition-colors duration-200 text-[10px] font-bold uppercase tracking-widest flex-shrink-0 ${
                        activeSection === tab.id ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                      aria-label={`Navigate to ${tab.label}`}
                      onClick={() => {
                        const element = document.getElementById(tab.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {/* Mobile Icon */}
                      <span className="sm:hidden flex items-center justify-center w-5 h-5">
                        <Icon strokeWidth={2.5} />
                      </span>
                      {/* Desktop Text */}
                      <span className="hidden sm:inline">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </AnimatedBackground>
            </div>
          </div>

          {/* Right Text */}
          <div className="hidden xl:flex flex-1 justify-end text-[10px] font-bold text-zinc-600 tracking-[0.2em] uppercase leading-tight text-right">
            Engineering Robust<br />Digital Solutions
          </div>

        </div>
      </div>
    </header>
  )
}
