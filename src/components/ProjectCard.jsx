import React from 'react'

export default function ProjectCard({project, index}){
  return (
    <div 
      className="glass rounded-2xl overflow-hidden card-hover group animate-fadeInUp active:scale-[0.98] transition-all duration-300"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={`${project.title} - Project Screenshot`} 
          loading="lazy"
          className="w-full h-52 sm:h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Hover overlay badge */}
        <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
           <div className="bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-white tracking-widest">
             Case Study
           </div>
        </div>
      </div>
      
      <div className="p-7 space-y-4 relative z-10 bg-slate-900/40 backdrop-blur-sm border-t border-white/5">
        <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <div className="h-1 w-8 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-500"></div>
        </div>
        
        {project.description && (
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 font-medium">
            {project.description}
          </p>
        )}
        
        <div className="pt-2">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 text-white text-sm font-black uppercase tracking-[0.15em] border-b-2 border-blue-600/50 hover:border-white transition-all pb-1 group-hover:gap-4 active:scale-95"
          >
            Explore Project
            <span className="text-blue-400 group-hover:translate-x-1 group-hover:text-white transition-all">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
