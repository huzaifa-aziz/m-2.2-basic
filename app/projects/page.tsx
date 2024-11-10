import React from 'react'

const ProjectsPage = () => {
  return (

    <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="project-grid">
      {/* Project 1: HTML Previewer */}
      <div className="project-card">
        <div className="project-image"></div>
        <h3>Project HTML Previewer</h3>
        <p>A modern web application built with Next.js and CSS libraries.</p>
        <div className="project-links">
          <a href="https://html-previewer-app-lyart.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
          <a href="https://github.com/huzaifa-aziz/HTML-Previewer-App" className="project-link" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
  
      {/* Project 2: Digital Clock */}
      <div className="project-card">
        <div className="project-image"></div>
        <h3>Project Digital Clock</h3>
        <p>A modern web application built with Next.js and CSS libraries.</p>
        <div className="project-links">
          <a href="https://digital-clock-app.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
          <a href="https://github.com/huzaifa-aziz/Digital-Clock-App" className="project-link" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
  
     
    </div>
  </section> 
   )
}

export default ProjectsPage