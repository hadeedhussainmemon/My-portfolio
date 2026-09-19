import React from 'react'
import { motion } from 'framer-motion'

export default function Home({ isLoading }) {
  

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-28 pb-12 sm:pt-32 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Left Content - Massive Typography */}
          <div className="order-1 flex flex-col justify-center text-left space-y-6 sm:space-y-8 animate-fadeInUp mt-4 lg:mt-0">
            
            <h1 className="font-display text-[80px] xs:text-[100px] sm:text-[140px] md:text-[180px] lg:text-[200px] xl:text-[240px] leading-[0.85] text-zinc-900 uppercase m-0 tracking-normal flex flex-col">
              <span className="block">Hadeed</span>
              <span className="block">Hussain</span>
            </h1>

            <div className="space-y-4 sm:space-y-6 max-w-md pt-2 sm:pt-4">
              <h2 className="text-emerald-700 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase leading-relaxed">
                Full Stack Developer Co-founder & CTO TECHNOSE DIGITAL
              </h2>
              
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                I craft digital experiences that are robust, scalable, and built with purpose.
              </p>

              <div className="w-12 h-[2px] bg-emerald-700 mt-6 sm:mt-8"></div>
            </div>
            
          </div>

          {/* Right Content - Solid Circle + Portrait */}
          <div className="order-2 relative flex justify-center lg:justify-end items-center animate-fadeIn mt-8 lg:mt-0">
            {/* Massive Green Circle */}
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] right-0 lg:right-[-50px] top-1/2 -translate-y-1/2">
              <motion.div 
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-emerald-700 rounded-full"
              ></motion.div>
            </div>
            
            {/* Portrait Image */}
            <div className="relative z-10 w-[240px] sm:w-[320px] lg:w-[400px] aspect-[4/5] overflow-hidden rounded-t-[1000px] rounded-b-[2rem] shadow-2xl border-4 border-white">
              <img 
                src="/assets/imgs/Pro.webp" 
                alt="Hadeed Hussain" 
                width="400"
                height="500"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover object-top grayscale contrast-[1.1] brightness-[1.05]" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
