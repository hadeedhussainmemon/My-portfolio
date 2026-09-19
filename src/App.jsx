import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import CustomCursor from './components/CustomCursor'
import FilmGrain from './components/FilmGrain'
import ScrollProgress from './components/ScrollProgress'

// Lazy load below-the-fold components to slash TBT and JS execution time
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Qualification = lazy(() => import('./components/Qualification'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const Terminal = lazy(() => import('./components/Terminal'))

export default function App() {
  return (
    <>
      <FilmGrain />
      <CustomCursor />
      
      {/* Terminal is heavy (Framer Motion), defer its load */}
      <Suspense fallback={null}>
        <Terminal />
      </Suspense>
      
      <ScrollProgress />
      <Header />
      
      <main className="pt-20">
        {/* Render Home instantly for lightning-fast LCP */}
        <Home />
        
        {/* Defer all below-the-fold content to free up the Main Thread */}
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <About />
          <Services />
          <Qualification />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
