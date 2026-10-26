import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustMessages from './components/TrustMessages'
import Services from './components/Services'
import Situations from './components/Situations'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <TrustMessages />
        <Services />
        <Situations />
        <Process />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
