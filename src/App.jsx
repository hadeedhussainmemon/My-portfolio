import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

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
      <ScrollProgress />
      <Header />
      <main className="pt-16">
        <Home isLoading={isLoading} />
        <About isLoading={isLoading} />
        <Services isLoading={isLoading} />
        <Skills isLoading={isLoading} />
        <Qualification isLoading={isLoading} />
        <Projects isLoading={isLoading} />
        <Contact isLoading={isLoading} />
      </main>
      <Footer />
    </>
  )
}
