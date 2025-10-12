// Portfolio Data Configuration
// Update this file with your personal information

export const personalInfo = {
  name: "Adarsh Raj",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
};

export const heroData = {
  greeting: "Hi, I'm",
  name: personalInfo.name,
  title: personalInfo.title,
  description: "I create beautiful and functional web applications using modern technologies. Passionate about clean code, user experience, and solving complex problems.",
  resumeUrl: "/path-to-your-resume.pdf", // Add your resume file to public folder
};

export const aboutData = {
  description: [
    "I'm a passionate full-stack developer with a love for creating innovative web solutions. With expertise in modern JavaScript frameworks and backend technologies, I enjoy building applications that make a difference.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in continuous learning and staying up-to-date with the latest industry trends."
  ],
  stats: [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "25+", label: "Happy Clients" },
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 88 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 90 },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 80 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 },
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    image: "/images/ecommerce-project.jpg", // Add your project images to public/images folder
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://your-ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce-project",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/task-app-project.jpg",
    technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
    liveUrl: "https://your-task-app-demo.com",
    githubUrl: "https://github.com/yourusername/task-management",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that provides current weather conditions and forecasts using external APIs with beautiful data visualizations.",
    image: "/images/weather-project.jpg",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "https://your-weather-app.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React, showcasing modern design principles and smooth animations.",
    image: "/images/portfolio-project.jpg",
    technologies: ["React", "CSS3", "Framer Motion", "Vite"],
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: false,
    category: "Frontend"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, commenting system, and content management capabilities.",
    image: "/images/blog-project.jpg",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
    liveUrl: "https://your-blog-platform.com",
    githubUrl: "https://github.com/yourusername/blog-platform",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    image: "/images/chat-project.jpg",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    liveUrl: "https://your-chat-app.com",
    githubUrl: "https://github.com/yourusername/chat-application",
    featured: false,
    category: "Full Stack"
  }
];

export const experienceData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Lead frontend development for multiple client projects using React and TypeScript. Mentored junior developers and implemented best practices for code quality and performance.",
    achievements: [
      "Improved application performance by 40% through optimization",
      "Led a team of 5 developers on a major project",
      "Implemented automated testing increasing code coverage to 90%",
      "Mentored 3 junior developers and conducted code reviews"
    ],
    type: "work"
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
      "Integrated third-party APIs and payment systems",
      "Collaborated with cross-functional teams of 10+ members"
    ],
    type: "work"
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
      "Contributed to open-source projects",
      "Participated in agile development processes"
    ],
    type: "work"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and web technologies. Graduated with honors.",
    achievements: [
      "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
      "President of Computer Science Club",
      "Completed senior capstone project on AI applications"
    ],
    type: "education"
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    institution: "Code Academy",
    period: "2019",
    description: "Intensive 6-month program covering modern web development technologies and practices.",
    achievements: [
      "Top 5% of graduating class",
      "Built 5 major projects during the program",
      "Received job placement assistance"
    ],
    type: "education"
  }
];

export const contactData = {
  title: "Get In Touch",
  description: "I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!",
  info: [
    {
      icon: '📧',
      title: 'Email',
      content: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: '📱',
      title: 'Phone',
      content: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s/g, '')}`
    },
    {
      icon: '📍',
      title: 'Location',
      content: personalInfo.location,
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      content: 'linkedin.com/in/yourprofile',
      link: personalInfo.linkedin
    }
  ],
  socialLinks: [
    { name: 'GitHub', url: personalInfo.github },
    { name: 'LinkedIn', url: personalInfo.linkedin },
    { name: 'Twitter', url: personalInfo.twitter },
    { name: 'Instagram', url: personalInfo.instagram },
  ]
};

// SEO and Meta Data
export const seoData = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: `Portfolio of ${personalInfo.name}, a ${personalInfo.title} specializing in modern web development.`,
  keywords: "web developer, full stack developer, react developer, javascript, portfolio",
  url: "https://your-portfolio-url.com",
  image: "/images/og-image.jpg" // Add an Open Graph image to public/images folder
};