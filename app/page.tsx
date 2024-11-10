


'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ContactPage from './contact/page'
import AboutPage from './about/page'
import ProjectsPage from './projects/page'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">Portfolio</div>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="hamburger"></div>
        </div>
        <ul className="nav-links">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Huzaifa Aziz</span></h1>
          <p className="typing-text">Full Stack Developer..</p>
          <div className="hero-buttons">
  
            <a href="../Resume.pdf" download className="primary-btn">
  Download CV
</a>
            <link rel="stylesheet" href="#contact" />
            <button className="secondary-btn">Contact Me</button>
          </div>
        </div>
      </section>
      <ProjectsPage />


    <AboutPage />


            <ContactPage />
    </main>
  )
}