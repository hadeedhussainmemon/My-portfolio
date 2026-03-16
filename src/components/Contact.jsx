import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-3">Contact Me</h2>
          <span className="text-gray-400 text-base sm:text-lg">Get in touch</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6 animate-slideInLeft relative">
            <div className="absolute -left-10 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  📱
                </div>
                <div>
                  <h3 className="font-black text-white text-lg uppercase tracking-wider">Phone</h3>
                  <a href="tel:+923322965814" className="text-gray-400 hover:text-blue-400 transition-colors font-medium text-lg">+92 332 2965814</a>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  📧
                </div>
                <div>
                  <h3 className="font-black text-white text-lg uppercase tracking-wider">Email</h3>
                  <a href="mailto:programmerhadeed@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors break-all font-medium text-lg">programmerhadeed@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-green-500/30 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-green-500/5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  📍
                </div>
                <div>
                  <h3 className="font-black text-white text-lg uppercase tracking-wider">Location</h3>
                  <div className="text-gray-400 font-medium text-lg">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
          
          <form className="glass p-8 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl animate-slideInRight relative overflow-hidden" action="mailto:programmerhadeed@gmail.com" method="POST" encType="text/plain">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="space-y-8 relative z-10">
              <div className="relative group">
                <input 
                  name="name" 
                  required 
                  placeholder="Your Name" 
                  className="w-full p-5 border border-white/10 rounded-2xl bg-white/5 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 font-medium" 
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Your Email" 
                  className="w-full p-5 border border-white/10 rounded-2xl bg-white/5 text-white placeholder-gray-500 focus:border-purple-500 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 font-medium" 
                />
              </div>
              <div className="relative group">
                <textarea 
                  name="message" 
                  required 
                  placeholder="Tell me about your project..." 
                  className="w-full p-5 border border-white/10 rounded-2xl bg-white/5 text-white placeholder-gray-500 focus:border-pink-500 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-pink-500/10 transition-all duration-300 h-44 resize-none font-medium" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl hover:shadow-blue-500/20 font-black uppercase tracking-widest text-lg"
              >
                Send Message ✉️
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
