import React from 'react'

export default function ProjectCard({project, index}){
  return (
    <div 
      className="glass rounded-2xl overflow-hidden card-hover group animate-fadeInUp"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={`${project.title} - Project Screenshot`} 
          loading="lazy"
          width="400"
          height="224"
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.title}
        </h3>
        
        {project.description && (
          <p className="text-sm sm:text-base text-gray-300 line-clamp-2">
            {project.description}
          </p>
        )}
        
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium group-hover:gap-3"
        >
          View Project
          <span className="transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </div>
  )
}
