import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Magnetic from './Magnetic'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
  ]

  const socials = [
    { label: 'GitHub', url: 'https://github.com/hadeedhussainmemon' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hadeedhussainmemon/' },
    { label: 'X (Twitter)', url: 'https://x.com/hadeedhussainmemon' },
    { label: 'Instagram', url: 'https://www.instagram.com/hadeedhussainmemon/' },
    { label: 'Facebook', url: 'https://www.facebook.com/hadeedhussainmemon' },
    { label: 'WhatsApp', url: 'https://wa.me/923322965814' },
  ]

  return (
    <footer className="bg-white border-t border-zinc-200 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Col 1 - Brand */}
          <div className="md:col-span-6 lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-6xl text-zinc-900 tracking-wide uppercase leading-none mb-6">
              HHM
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm font-medium leading-relaxed max-w-[250px]">
              Engineering robust, scalable, and meaningful digital experiences.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Explore</span>
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => {
                  const el = document.getElementById(link.id)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-left text-xs text-zinc-900 font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors inline-block"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Col 3 - Socials */}
          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4 items-start">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Connect</span>
            {socials.map(social => (
              <Magnetic key={social.label}>
                <a 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  className="group flex items-center gap-1 text-xs text-zinc-900 font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors p-2 -ml-2"
                >
                  {social.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Magnetic>
            ))}
          </div>

        </div>

        {/* Bottom Section - Copyright & Back to Top */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Hadeed Hussain Memon. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest hover:text-emerald-700 transition-colors"
          >
            Back to Top &uarr;
          </button>
        </div>

      </div>
    </footer>
  )
}
