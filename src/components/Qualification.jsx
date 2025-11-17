import React from 'react'

const qualifications = [
  {
    type: 'education',
    title: 'Matric',
    institution: 'EGSS',
    year: '2022',
    status: 'completed',
    description: 'Scored 77% | Foundation in Science and Mathematics',
    icon: '🎓'
  },
  {
    type: 'education',
    title: 'Intermediate',
    institution: 'GDBC Johar',
    year: '2024-2025',
    status: 'progress',
    description: 'Pre-Engineering | Currently pursuing higher secondary education',
    icon: '📚'
  },
  {
    type: 'training',
    title: 'Modern Web & App Development',
    institution: 'SMIT',
    year: '2024-2025',
    status: 'progress',
    description: 'Comprehensive training in HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, MongoDB',
    icon: '💻'
  }
]

export default function Qualification() {
  return (
    <section id="qualification" className="min-h-screen flex items-center py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">My Journey</span>
            <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">
            Education & <span className="gradient-text">Training</span>
          </h2>
          <p className="text-gray-400 text-base">Academic Background & Professional Development</p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 hidden sm:block"></div>
          
          <div className="space-y-12">
            {qualifications.map((qual, index) => (
              <div 
                key={index}
                className={`relative animate-fadeInUp ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Timeline dot - desktop */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10 ${
                    qual.status === 'completed' 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/50' 
                      : 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 animate-pulse'
                  }`}>
                    <span className="text-2xl">{qual.icon}</span>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl border-2 border-slate-700/50 hover:border-blue-500/50">
                      {/* Mobile dot */}
                      <div className={`flex md:hidden items-center gap-3 mb-4`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          qual.status === 'completed' 
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                            : 'bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse'
                        }`}>
                          <span className="text-xl">{qual.icon}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            qual.status === 'completed'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {qual.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                          </span>
                          <span className="text-gray-400 text-sm font-medium">{qual.year}</span>
                        </div>
                      </div>

                      {/* Desktop status badge */}
                      <div className="hidden md:flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          qual.status === 'completed'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {qual.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                        </span>
                        <span className="text-gray-400 text-sm font-medium">{qual.year}</span>
                      </div>

                      {/* Title and institution */}
                      <h3 className="text-2xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {qual.title}
                      </h3>
                      <p className="text-blue-400 font-semibold mb-3">{qual.institution}</p>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {qual.description}
                      </p>

                      {/* Type badge */}
                      <div className="mt-4 pt-4 border-t border-slate-700/50">
                        <span className="inline-flex items-center gap-2 text-xs text-gray-400">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          {qual.type === 'education' ? 'Academic Education' : 'Professional Training'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
