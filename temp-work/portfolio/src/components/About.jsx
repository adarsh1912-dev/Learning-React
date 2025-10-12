import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating innovative web solutions. 
              With expertise in modern JavaScript frameworks and backend technologies, I enjoy 
              building applications that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying outdoor activities. I believe in continuous 
              learning and staying up-to-date with the latest industry trends.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-pic">
              {/* Replace with actual image */}
              <div className="placeholder-image">About Image</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;