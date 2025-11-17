import React from 'react'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: '📷', 
      url: 'https://www.instagram.com/hadeedhussainmemon/',
      gradient: 'from-pink-600 to-purple-600',
      hoverGradient: 'hover:from-pink-500 hover:to-purple-500'
    },
    { 
      name: 'Twitter', 
      icon: '𝕏', 
      url: 'https://x.com/hadeedhussainmemon',
      gradient: 'from-blue-600 to-cyan-600',
      hoverGradient: 'hover:from-blue-500 hover:to-cyan-500'
    },
    { 
      name: 'GitHub', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
        </svg>
      ),
      gradient: 'from-gray-700 to-gray-900',
      hoverGradient: 'hover:from-gray-600 hover:to-gray-800'
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: 'from-blue-700 to-blue-900',
      hoverGradient: 'hover:from-blue-600 hover:to-blue-800'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Qualification', href: '#qualification' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative mt-20 overflow-hidden bg-white/95 dark:bg-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-slate-100/90 dark:from-slate-800/50 dark:to-slate-900/90 backdrop-blur-md"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 dark:opacity-20">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4 text-center sm:text-left">
              <div className="inline-block">
                <h2 className="text-3xl sm:text-4xl font-black gradient-text mb-3 hover:scale-105 transition-transform duration-300">
                  Hadeed Hussain
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"></div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base mb-4 max-w-sm mx-auto sm:mx-0">
                Full Stack Web Developer crafting beautiful, responsive, and user-friendly digital experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-500 justify-center sm:justify-start">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Available for freelance work</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 text-center sm:text-left">
              <h3 className="text-slate-800 dark:text-white font-bold text-lg mb-6 flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full shadow-sm"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all duration-300 inline-flex items-center gap-2 group font-medium"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:bg-blue-500 group-hover:w-4 transition-all duration-300 rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 text-center sm:text-left">
              <h3 className="text-slate-800 dark:text-white font-bold text-lg mb-6 flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full shadow-sm"></span>
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 dark:text-gray-400 justify-center sm:justify-start">
                  <span className="text-blue-600 dark:text-blue-400 mt-1 text-xl">📧</span>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500 mb-1 font-semibold">Email</p>
                    <a href="mailto:hadeedhussain@example.com" className="hover:text-blue-600 dark:hover:text-white transition-colors font-medium">
                      hadeedhussain@example.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-gray-400 justify-center sm:justify-start">
                  <span className="text-blue-600 dark:text-blue-400 mt-1 text-xl">📍</span>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500 mb-1 font-semibold">Location</p>
                    <p className="font-medium">Karachi, Pakistan</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h3 className="text-slate-800 dark:text-white font-bold text-lg mb-6 flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full shadow-sm"></span>
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl overflow-hidden border border-gray-200/50 dark:border-white/10`}
                    aria-label={social.name}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <span className="relative z-10 text-xl group-hover:scale-110 transition-transform duration-300 text-gray-700 dark:text-white group-hover:text-white">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 dark:border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 dark:text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} <span className="text-slate-800 dark:text-white font-bold">Hadeed Hussain</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">Privacy Policy</a>
              <span className="text-slate-400 dark:text-gray-600">•</span>
              <a href="#terms" className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg shadow-blue-500/20"></div>
    </footer>
  )
}
