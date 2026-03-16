import React from 'react'
import Skeleton from './Skeleton'

const services = [
  {
    title: 'MERN Stack Development',
    description: 'Building robust, scalable, and high-performance web applications using MongoDB, Express.js, React, and Node.js.',
    icon: '💻',
    skills: ['Full Stack', 'API Integration', 'DB Design'],
    color: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Mobile App Solutions',
    description: 'Crafting cross-platform mobile experiences that are intuitive, fast, and feature-rich for modern users.',
    icon: '📱',
    skills: ['React Native', 'Mobile UI', 'Performance'],
    color: 'from-purple-600 to-pink-500'
  },
  {
    title: 'Digital Agency Services',
    description: 'Leading Technose Digital to provide end-to-end solutions, including SEO, Branding, and Strategic Consulting.',
    icon: '🏢',
    skills: ['SEO', 'Marketing', 'Consulting'],
    color: 'from-orange-600 to-red-500'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-centric interfaces that are not only beautiful but also provide a seamless user journey.',
    icon: '🎨',
    skills: ['Figma', 'Prototyping', 'Accessibility'],
    color: 'from-green-600 to-emerald-500'
  }
]

export default function Services({ isLoading }) {
  if (isLoading) {
    return (
      <section id="services" className="py-16 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <Skeleton variant="text" className="w-32 h-4 mx-auto mb-4" />
          <Skeleton variant="title" className="w-80 h-16 mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} variant="card" className="h-64 rounded-[2rem]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="min-h-screen flex items-center py-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm"></div>
            <span className="text-blue-400 text-sm font-black uppercase tracking-[0.2em]">Our Expertise</span>
            <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-sm"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital services through <span className="text-white font-bold">Technose Digital</span>, tailored to scale your business and elevate your online presence.
          </p>
        </div>

        {/* Services Grid with Premium Polish */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group glass p-8 sm:p-10 rounded-[2rem] border border-white/5 hover:border-blue-500/50 transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Complex gradient highlight background */}
              <div className={`absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-700`}></div>
              
              <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
                <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {service.icon}
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:gradient-text transition-all duration-500">
                      {service.title}
                    </h3>
                    <div className="h-1 w-12 bg-blue-600/50 rounded-full group-hover:w-24 group-hover:bg-blue-600 transition-all duration-700"></div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-medium">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {service.skills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-white group-hover:border-blue-500/50 transition-all duration-500">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sophisticated corner accent */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-10 group-hover:translate-x-0">
                <div className="flex items-center gap-3 text-blue-400 font-black uppercase tracking-widest text-[10px]">
                   View Details
                   <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="glass inline-flex flex-col sm:flex-row items-center gap-6 p-2 pr-8 rounded-full border border-white/10 shadow-2xl">
             <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-black uppercase tracking-wider text-sm">
                Partnership
             </div>
             <p className="text-gray-300 font-medium">
               Looking for a partner for your next big project? <a href="https://www.technosedigital.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 underline underline-offset-4 decoration-blue-500/50 transition-colors font-bold ml-1">Explore Technose Digital</a>
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}
