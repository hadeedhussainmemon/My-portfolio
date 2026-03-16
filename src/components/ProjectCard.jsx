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
        
        <div className="pt-2 flex items-center justify-between gap-4">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 text-white text-sm font-black uppercase tracking-[0.15em] border-b-2 border-blue-600/50 hover:border-white transition-all pb-1 group-hover:gap-4 active:scale-95"
          >
            Explore Project
            <span className="text-blue-400 group-hover:translate-x-1 group-hover:text-white transition-all">→</span>
          </a>

          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-90"
              title="View Source Code"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
