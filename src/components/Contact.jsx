import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-3">Contact Me</h2>
          <span className="text-gray-400 text-base sm:text-lg">Get in touch</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 animate-slideInLeft">
            <div className="glass p-6 rounded-2xl card-hover group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📱
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Phone</h3>
                  <a href="tel:+923322965814" className="text-gray-300 hover:text-blue-400 transition-colors">+92 332 2965814</a>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl card-hover group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📧
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Email</h3>
                  <a href="mailto:programmerhadeed@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">programmerhadeed@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl card-hover group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Location</h3>
                  <div className="text-gray-300">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
          
          <form className="glass p-6 sm:p-8 rounded-2xl animate-slideInRight" action="mailto:programmerhadeed@gmail.com" method="POST" encType="text/plain">
            <div className="space-y-6">
              <div>
                <input 
                  name="name" 
                  required 
                  placeholder="Your Name" 
                  className="w-full p-4 border border-gray-600/50 rounded-xl bg-slate-800/50 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Your Email" 
                  className="w-full p-4 border border-gray-600/50 rounded-xl bg-slate-800/50 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" 
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  required 
                  placeholder="Your Message" 
                  className="w-full p-4 border border-gray-600/50 rounded-xl bg-slate-800/50 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all h-40 resize-none" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg hover:scale-[1.02]"
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
