import React from 'react'

const qualifications = [
  {
    title: 'BS Data Science',
    institution: 'Virtual University of Pakistan',
    year: '2025-2029',
    status: 'In Progress',
  },
  {
    title: 'Modern Web & App Development',
    institution: 'SMIT',
    year: '2024-2025',
    status: 'Completed',
  },
  {
    title: 'Intermediate (Pre-Engineering)',
    institution: 'GDBC Johar',
    year: '2024-2025',
    status: 'Completed',
  },
  {
    title: 'Matric (Science)',
    institution: 'EGSS',
    year: '2022',
    status: 'Completed',
  }
]

export default function Qualification({ isLoading }) {
  if (isLoading) return null;

  return (
    <section id="qualification" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left side - Header */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-zinc-900 tracking-[0.25em] uppercase leading-relaxed mb-6">
              Education &<br />Training
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-[250px] mb-8">
              Academic Background & Professional Development.
            </p>
          </div>

          {/* Right side - Qualifications Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {qualifications.map((qual, index) => (
                <div key={index} className="border border-zinc-200 bg-white p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2 py-1">
                      {qual.year}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      {qual.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest leading-tight mb-2">
                    {qual.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
                    {qual.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
