import React from 'react'
import { Lightbulb, Search, Target } from "lucide-react"
import { motion } from 'framer-motion'

const services = [
  {
    title: 'MERN Stack Development',
    description: 'Building robust, scalable, and high-performance web applications using MongoDB, Express.js, React, and Node.js.',
    skills: ['Full Stack', 'API Integration', 'DB Design'],
  },
  {
    title: 'Mobile App Solutions',
    description: 'Crafting cross-platform mobile experiences that are intuitive, fast, and feature-rich for modern users.',
    skills: ['React Native', 'Mobile UI', 'Performance'],
  },
  {
    title: 'Digital Agency Services',
    description: 'Leading Technose Digital to provide end-to-end solutions, including SEO, Branding, and Strategic Consulting.',
    skills: ['SEO', 'Marketing', 'Consulting'],
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-centric interfaces that are not only beautiful but also provide a seamless user journey.',
    skills: ['Figma', 'Prototyping', 'Accessibility'],
  }
]

export default function Services({ isLoading }) {
  if (isLoading) return null;

  return (
    <section id="services" className="py-24 bg-white border-t border-zinc-200 overflow-hidden">
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
              My<br />Services
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-[250px] mb-8">
              Comprehensive digital services tailored to scale your business.
            </p>
          </div>

          {/* Right side - Services List */}
          <div className="lg:col-span-9">
            <div className="border-t border-zinc-200">
              {services.map((service, index) => (
                <div key={index} className="py-8 border-b border-zinc-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-zinc-50 transition-colors px-4 -mx-4">
                  <div className="md:col-span-1 text-lg font-bold text-zinc-300 leading-none pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex flex-wrap gap-2">
                    {service.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-100 text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Approach */}
            <div className="mt-20">
               <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-widest leading-tight mb-8">
                 Engineering Approach
               </h3>
               
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Search className="w-4 h-4 text-emerald-700" />
                      <h4 className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest">Research</h4>
                    </div>
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                      Analyze bottlenecks (e.g., N+1 query problems) and understand the full problem space before writing code.
                    </p>
                  </div>
                  
                  {/* Step 2 */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-4 h-4 text-emerald-700" />
                      <h4 className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest">Analysis</h4>
                    </div>
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                      Identify architectural improvements, evaluate tools, and design database structures optimized for scale.
                    </p>
                  </div>
                  
                  {/* Step 3 */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-4 h-4 text-emerald-700" />
                      <h4 className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest">Execution</h4>
                    </div>
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                      Implement robust, clean code (e.g., adding composite indexes or eager loading) ensuring maximum performance.
                    </p>
                  </div>
               </div>
            </div>
            
          </div>
          
        </div>
      </motion.div>
    </section>
  )
}
