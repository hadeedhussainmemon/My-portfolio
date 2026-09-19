import React from 'react'

export default function Contact({ isLoading }) {
  

  return (
    <section id="contact" className="py-24 bg-zinc-100 border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left - Let's Connect */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-zinc-900 tracking-[0.25em] uppercase leading-relaxed mb-6">
              Let's<br />Connect
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-[200px] mb-8">
              I'm currently available for freelance and full-time opportunities.
            </p>

          </div>

          {/* Center - Contact Info */}
          <div className="lg:col-span-5 grid gap-8 lg:border-l lg:border-zinc-200 lg:pl-12">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:programmerhadeed@gmail.com" className="text-xs sm:text-sm text-zinc-900 font-medium hover:text-emerald-700 transition-colors">
                  programmerhadeed@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <div>
                <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Website</span>
                <a href="https://hadeedhussainmemon.vercel.app" className="text-xs sm:text-sm text-zinc-900 font-medium hover:text-emerald-700 transition-colors">
                  hadeedhussainmemon.vercel.app
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Location</span>
                <span className="text-xs sm:text-sm text-zinc-900 font-medium">
                  Karachi, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Right - Let's Build Box */}
          <div className="lg:col-span-4 flex lg:justify-end h-full mt-8 lg:mt-0">
            <a href="mailto:programmerhadeed@gmail.com" className="group flex flex-col justify-between w-full lg:max-w-[300px] border border-emerald-700 bg-emerald-50/50 hover:bg-emerald-700 p-8 transition-colors duration-300 min-h-[250px]">
              <h3 className="text-xs font-bold text-emerald-700 group-hover:text-white uppercase tracking-[0.2em] leading-relaxed">
                Let's Build<br />Something<br />Great Together
              </h3>
              <div className="flex justify-end mt-12 overflow-hidden">
                <span className="text-emerald-700 group-hover:text-white text-2xl transform transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
