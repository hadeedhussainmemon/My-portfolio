import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'

export default function Projects({ isLoading }){
  const [selectedProject, setSelectedProject] = useState(null);

  if (isLoading) return null;

  const displayProjects = [
    {
      title: 'Enterprise LMS System',
      shortTitle: 'LMS',
      url: 'https://lms.technosedigital.com',
      image: 'https://image.thum.io/get/width/800/crop/900/https://lms.technosedigital.com',
      role: 'Lead Full Stack Developer',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      problem: 'The client needed a scalable learning management platform capable of handling hundreds of concurrent students with complex role-based access control.',
      challenge: 'Optimizing real-time progress tracking and managing massive state changes without degrading front-end performance.',
      solution: 'Architected a decoupled MERN stack application, utilizing Redux for efficient state management and optimized MongoDB indexing to reduce query times by 40%.'
    },
    {
      title: 'B2B CRM Dashboard',
      shortTitle: 'CRM',
      url: 'https://crm.technosedigital.com',
      image: 'https://image.thum.io/get/width/800/crop/900/https://crm.technosedigital.com',
      role: 'Technical Lead & Architect',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      problem: 'Sales teams were relying on fragmented spreadsheets, causing severe data silos and reporting delays.',
      challenge: 'Aggregating thousands of rows of relational data into interactive, zero-latency charts and analytics dashboards.',
      solution: 'Implemented server-side rendering (SSR) and heavy database query optimizations to deliver lightning-fast data visualizations.'
    },
    {
      title: 'High-Conversion E-Commerce',
      shortTitle: 'STORE',
      url: 'https://technose-store.vercel.app',
      image: 'https://image.thum.io/get/width/800/crop/900/https://technose-store.vercel.app',
      role: 'Full Stack Developer',
      stack: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      problem: 'An existing retail business needed to transition online with a secure, highly-converting checkout flow.',
      challenge: 'Building a bulletproof payment gateway integration and ensuring flawless real-time inventory synchronization.',
      solution: 'Integrated Stripe for secure payment processing and built robust webhook listeners to ensure databases stayed perfectly synced during concurrent purchases.'
    },
    {
      title: 'Open Source Algorithms',
      shortTitle: 'OPEN SOURCE',
      url: 'https://github.com/hadeedhussainmemon',
      image: 'https://placehold.co/800x900/047857/ffffff.png?text=Open+Source',
      role: 'Open Source Contributor',
      stack: ['JavaScript', 'Algorithms', 'Data Structures'],
      problem: 'The development community requires robust, highly optimized code implementations for standard engineering problems.',
      challenge: 'Writing clean, thoroughly documented code that adheres strictly to global industry best practices.',
      solution: 'Regularly maintain and contribute to GitHub repositories focused on clean architecture, serving as a technical reference for peers.'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Title & Description */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-zinc-900 tracking-[0.25em] uppercase leading-relaxed mb-6">
              Engineering<br />Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-[250px] mb-8">
              Deep dives into architecture, problem-solving, and technical execution.
            </p>
            
            <a href="https://github.com/hadeedhussainmemon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold text-emerald-700 tracking-widest uppercase hover:text-emerald-600 transition-colors" aria-label="View Github Profile">
              View All On GitHub 
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>

          {/* Right Column - Project Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {displayProjects.map((project, index) => (
                <div key={index} className="flex flex-col group cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {/* Project Header (Number & Title) */}
                  <div className="flex items-end gap-3 mb-4 pb-4 border-b border-zinc-200">
                    <span className="text-lg font-bold text-zinc-900 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col">
                      <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-widest leading-tight group-hover:text-emerald-700 transition-colors">
                        {project.shortTitle}
                      </h3>
                      <span className="text-[10px] text-zinc-600 font-medium mt-0.5">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Image */}
                  <div className="relative w-full aspect-video bg-zinc-200 overflow-hidden group-hover:opacity-100 transition-opacity border border-zinc-200">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-500 flex items-center justify-center">
                       <span className="bg-white text-zinc-900 px-6 py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                         Read Case Study
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border-4 border-zinc-900 shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-zinc-200 p-6 flex justify-between items-center z-10">
                <h3 className="text-sm font-bold text-zinc-900 tracking-[0.2em] uppercase">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-zinc-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-zinc-900" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-3">The Problem</h4>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-3">Engineering Challenge</h4>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-3">Architecture & Solution</h4>
                    <p className="text-sm text-zinc-900 font-medium leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-zinc-50 border border-zinc-200 p-6">
                    <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">Project Details</h4>
                    <div className="space-y-4">
                      <div>
                        <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Role</span>
                        <span className="text-xs font-bold text-zinc-900">{selectedProject.role}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Tech Stack</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map(tech => (
                            <span key={tech} className="bg-white border border-zinc-200 px-3 py-1 text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-900 hover:bg-emerald-700 text-white px-6 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors">
                      <ExternalLink className="w-4 h-4" /> View Live Deployment
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
