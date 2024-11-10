import React from 'react'

const AboutPage = () => {
  return (
    <section id="about" className="about">
    <h2>About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>I'm a passionate developer with expertise in building modern web applications. 
           With 5 years of experience in the industry, I specialize in creating responsive 
           and user-friendly interfaces.</p>
        <div className="skills">
          <div className="skill">
            <span>React</span>
            <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
          </div>
          <div className="skill">
            <span>Next.js</span>
            <div className="skill-bar"><div className="skill-progress" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <span>Node.js</span>
            <div className="skill-bar"><div className="skill-progress" style={{width: '80%'}}></div></div>
          </div>
          <div className="skill">
            <span>Flutter</span>
            <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default AboutPage