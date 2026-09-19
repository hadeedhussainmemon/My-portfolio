import React from 'react'
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

export default function App() {
  return (
    <>
      <FilmGrain />
      <CustomCursor />
      <Terminal />
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <Home />
        <About />
        <Services />
        <Qualification />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
