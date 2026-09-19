import React from 'react'

export default function Testimonials({ isLoading }) {
  

  const testimonials = [
    {
      quote: "Hadeed is an exceptional technical leader. He didn't just write code; he architected a solution that scaled our operations effortlessly.",
      author: "CEO, Tech Startup",
      project: "B2B CRM Dashboard"
    },
    {
      quote: "Working with Technose Digital was a game-changer. Hadeed's deep understanding of the MERN stack ensured our project was delivered on time and lightning-fast.",
      author: "Product Manager",
      project: "Enterprise LMS System"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Title */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-zinc-900 tracking-[0.25em] uppercase leading-relaxed mb-6">
              Client<br />Feedback
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-[250px] mb-8">
              Real stories from people who trusted me to engineer their solutions.
            </p>
          </div>

          {/* Right Column - Quotes */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200 p-8 sm:p-10 flex flex-col justify-between">
                <p className="text-sm sm:text-base text-zinc-900 font-medium leading-relaxed mb-12">
                  "{test.quote}"
                </p>
                
                <div>
                  <div className="w-8 h-[2px] bg-emerald-700 mb-4"></div>
                  <span className="block text-xs font-bold text-zinc-900 uppercase tracking-widest">{test.author}</span>
                  <span className="block text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-1">{test.project}</span>
                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  )
}
