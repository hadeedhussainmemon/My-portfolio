import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
