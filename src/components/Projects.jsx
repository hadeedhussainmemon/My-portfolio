import React, { useState, useEffect } from 'react'
import { projectsData } from '../data/projectsData'
import ProjectCard from './ProjectCard'

export default function Projects(){
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsPerPage = isMobile ? 1 : 3
  const [page, setPage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const totalPages = Math.ceil(projectsData.length / itemsPerPage)

  const start = page * itemsPerPage
  const visible = projectsData.slice(start, start + itemsPerPage)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % totalPages)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalPages])

  const handlePageChange = (newPage) => {
    setPage(newPage)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextPage = () => {
    handlePageChange((page + 1) % totalPages)
  }

  const prevPage = () => {
    handlePageChange((page - 1 + totalPages) % totalPages)
  }

  return (
    <section id="projects" className="min-h-screen flex items-center py-12 bg-slate-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Portfolio</span>
            <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-base">Featured Work & Recent Creations</p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 group"
            aria-label="Previous projects"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextPage}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 group"
            aria-label="Next projects"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Projects Grid with Slide Animation */}
          <div className="overflow-hidden">
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out"
              style={{ opacity: 1 }}
            >
              {visible.map((p, i) => (
                <div key={i} className="animate-fadeInUp" style={{animationDelay: `${i * 0.1}s`}}>
                  <ProjectCard project={p} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots & Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="glass px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
            aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {Array.from({length: totalPages}).map((_, i) => (
              <button 
                key={i} 
                onClick={() => handlePageChange(i)} 
                className={`relative transition-all duration-300 rounded-full ${
                  i === page 
                    ? 'w-10 h-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50' 
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 hover:scale-125'
                }`}
                aria-label={`Go to page ${i + 1}`}
              >
                {i === page && (
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Page counter */}
          <div className="glass px-4 py-2 rounded-full">
            <span className="text-sm font-semibold text-gray-400">
              {page + 1} <span className="text-gray-600">/</span> {totalPages}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
