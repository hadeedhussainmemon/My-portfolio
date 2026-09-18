import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Terminal from './components/Terminal'
import FilmGrain from './components/FilmGrain'
import { Loader } from './components/prompt-kit/loader'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated elite loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-2xl"
          >
            <Loader variant="terminal" className="mb-6 text-2xl" />
            <Loader variant="pulse" />
          </motion.div>
        )}
      </AnimatePresence>
      <FilmGrain />
      <CustomCursor />
      <Terminal />
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <Home isLoading={isLoading} />
        <About isLoading={isLoading} />
        <Services isLoading={isLoading} />
        <Qualification isLoading={isLoading} />
        <Projects isLoading={isLoading} />
        <Skills isLoading={isLoading} />
        <Testimonials isLoading={isLoading} />
        <Contact isLoading={isLoading} />
      </main>
      <Footer />
    </>
  )
}
