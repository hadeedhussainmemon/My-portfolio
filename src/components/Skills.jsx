import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function Skills({ isLoading }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  if (isLoading) return null;

  return (
    <section id="skills" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Skills & Toolkit */}
          <div>
            <h2 className="text-sm font-bold text-zinc-900 tracking-[0.25em] uppercase leading-relaxed mb-10">
              Skills & Toolkit
            </h2>
            
            <div className="space-y-6">
              {[
                { name: 'MERN Stack', pct: '95%' },
                { name: 'React / Next.js', pct: '90%' },
                { name: 'Node.js / Express', pct: '85%' },
                { name: 'Database Architecture', pct: '90%' },
                { name: 'UI / UX Design', pct: '85%' },
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full border border-zinc-400 flex-shrink-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-emerald-700 rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-800 tracking-widest uppercase w-32">
                    {skill.name}
                  </span>
                  <div className="flex-1 h-[1px] bg-zinc-200 relative">
                    <div className="absolute left-0 top-0 h-[2px] -mt-[0.5px] bg-emerald-700 transition-all duration-1000 ease-out" style={{ width: inView ? skill.pct : '0%' }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500">{skill.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Impact & Experience */}
          <div className="lg:border-l lg:border-zinc-200 lg:pl-16">
            <h2 className="text-sm font-bold text-zinc-900 tracking-[0.25em] uppercase leading-relaxed mb-10">
              Impact & Experience
            </h2>
            
            <div ref={ref} className="grid grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col border-r border-zinc-200 pr-4">
                <span className="font-display text-4xl sm:text-5xl text-zinc-900 tracking-tight leading-none mb-2">
                  {inView ? <CountUp start={0} end={1} duration={2} /> : "0"}.
                  {inView ? <CountUp start={0} end={5} duration={2.5} /> : "0"}+
                </span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Years of<br/>Experience</span>
              </div>
              <div className="flex flex-col border-r border-zinc-200 pr-4">
                <span className="font-display text-4xl sm:text-5xl text-zinc-900 tracking-tight leading-none mb-2">
                  {inView ? <CountUp start={0} end={10} duration={2.5} /> : "0"}+
                </span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Projects<br/>Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl text-zinc-900 tracking-tight leading-none mb-2">
                  {inView ? <CountUp start={0} end={10} duration={2.5} /> : "0"}+
                </span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Happy<br/>Clients</span>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 p-8 flex gap-6">
              <span className="font-display text-5xl text-emerald-700 leading-none">"</span>
              <div>
                <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mb-4">
                  Code is not just what it looks like and feels like. Code is how it works.
                </p>
                <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-widest">
                  Inspired by Steve Jobs
                </span>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  )
}
