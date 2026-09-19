import React from 'react'
import { Source, SourceContent, SourceTrigger } from './prompt-kit/source'
import { motion } from 'framer-motion'

export default function About({ isLoading }) {
  

  return (
    <section id="about" className="py-24 bg-white border-t border-zinc-200 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left side - Header */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-zinc-900 tracking-[0.25em] uppercase leading-relaxed mb-6">
              About<br />Me
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-[250px] mb-8">
              Passionate Developer & Tech Enthusiast
            </p>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-6">
              <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                I'm a <strong className="text-emerald-700">creative MERN stack developer</strong> who transforms ideas into exceptional digital experiences. With a passion for clean code and elegant design, I specialize in building modern, responsive web applications.
              </p>
              <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                As the Co-founder of <a href="https://www.technosedigital.com" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-900 hover:text-emerald-700 underline underline-offset-4 decoration-zinc-300 hover:decoration-emerald-700 transition-colors">Technose Digital</a>, I lead a team of talented professionals delivering comprehensive digital services. We specialize in everything from web development to digital branding, helping businesses thrive in the modern era.
              </p>
              
              <div className="pt-6 border-t border-zinc-200 mt-6">
                <p className="text-xs text-zinc-600 font-medium leading-relaxed italic">
                  Hadeed Hussain is a distinguished MERN Stack Developer, Agency Co-founder, and BS Data Science Student at the Virtual University of Pakistan.
                </p>
              </div>
            </div>

            <div>
              {/* Key Ecosystem Links */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-bold text-zinc-900 tracking-widest uppercase">My Ecosystem & Links</h3>
                <div className="flex flex-wrap gap-3">
                  <Source href="https://react.dev">
                    <SourceTrigger showFavicon />
                    <SourceContent title="React" description="The library for web and native user interfaces." />
                  </Source>
                  <Source href="https://nodejs.org">
                    <SourceTrigger showFavicon />
                    <SourceContent title="Node.js" description="An asynchronous event-driven JavaScript runtime designed to build scalable network applications." />
                  </Source>
                  <Source href="https://tailwindcss.com">
                    <SourceTrigger showFavicon />
                    <SourceContent title="Tailwind CSS" description="Rapidly build modern websites without ever leaving your HTML." />
                  </Source>
                  <Source href="https://www.technosedigital.com">
                    <SourceTrigger showFavicon />
                    <SourceContent title="Technose Digital" description="My digital agency providing end-to-end IT, branding, and marketing solutions globally." />
                  </Source>
                  <Source href="https://github.com/hadeedhussainmemon">
                    <SourceTrigger showFavicon />
                    <SourceContent title="GitHub Profile" description="Check out my open-source contributions and latest projects." />
                  </Source>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-12 mt-auto">
                <a 
                  href="/cv/MyCV.pdf" 
                  download
                  className="bg-zinc-900 text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-emerald-700 transition-colors"
                >
                  Download Resume
                </a>
                <a 
                  href="#contact" 
                  className="border border-zinc-900 text-zinc-900 px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-zinc-100 transition-colors"
                >
                  Let's Talk
                </a>
              </div>
            </div>

          </div>
          
        </div>

        {/* Kinetic Parallax Text */}
        <div className="w-full overflow-hidden flex whitespace-nowrap pt-24 mt-24 border-t border-zinc-200">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-8 text-zinc-100 font-display text-6xl sm:text-8xl uppercase tracking-widest cursor-default select-none"
            style={{ textShadow: "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000" }}
          >
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="hover:text-emerald-700 transition-colors duration-300">MERN STACK</span>
                <span className="text-zinc-200 hover:text-emerald-700 transition-colors duration-300">DATA SCIENCE</span>
                <span className="hover:text-emerald-700 transition-colors duration-300">DIGITAL AGENCY</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}
