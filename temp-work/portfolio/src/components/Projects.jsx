import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts using external APIs with beautiful data visualizations.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React, showcasing modern design principles and smooth animations.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "CSS3", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, commenting system, and content management capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
          <p className="section-description">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="projects-grid featured">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card featured-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-header">
          <h3 className="section-subtitle">Other Projects</h3>
        </div>

        <div className="projects-grid other">
          {otherProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link-small" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-link-small" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;