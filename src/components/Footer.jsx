import React from 'react'

export default function Footer(){
  return (
    <footer className="glass backdrop-blur-md py-12 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">Hadeed</h1>
            <p className="text-gray-400">Web Developer</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#qualification" className="text-gray-400 hover:text-white transition-colors">Qualification</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.instagram.com/hadeedhussainmemon/"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all hover:scale-110"
              >
                📷
              </a>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://x.com/hadeedhussainmemon"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">© 2024 hadeedhussainmemon. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
