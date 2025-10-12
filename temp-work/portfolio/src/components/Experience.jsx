import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead frontend development for multiple client projects using React and TypeScript. Mentored junior developers and implemented best practices for code quality and performance.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led a team of 5 developers on a major project",
        "Implemented automated testing increasing code coverage to 90%"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with design and product teams to deliver user-friendly solutions.",
      achievements: [
        "Built 15+ responsive web applications",
        "Reduced server response time by 30%",
        "Integrated third-party APIs and payment systems"
      ]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: "Started my career developing websites and web applications. Gained experience in HTML, CSS, JavaScript, and various frameworks while working on diverse projects.",
      achievements: [
        "Completed 20+ client projects successfully",
        "Learned modern web development practices",
        "Contributed to open-source projects"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      description: "Focused on software engineering, algorithms, and web technologies. Graduated with honors."
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      period: "2019",
      description: "Intensive 6-month program covering modern web development technologies and practices."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="experience-content">
          <div className="experience-section">
            <h3 className="subsection-title">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.title}</h4>
                      <div className="timeline-meta">
                        <span className="company">{exp.company}</span>
                        <span className="period">{exp.period}</span>
                      </div>
                    </div>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="achievements">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{edu.degree}</h4>
                      <div className="timeline-meta">
                        <span className="company">{edu.institution}</span>
                        <span className="period">{edu.period}</span>
                      </div>
                    </div>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;