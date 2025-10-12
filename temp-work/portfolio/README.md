# Portfolio Website Template

A modern, responsive portfolio website built with React and Vite. This template is designed to be easily customizable and deployment-ready.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Customization**: All content is centralized in a data file
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Friendly**: Proper meta tags and structure
- **Contact Form**: Working contact form with validation

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero/landing section
│   ├── About.jsx        # About section
│   ├── Skills.jsx       # Skills and technologies
│   ├── Projects.jsx     # Portfolio projects
│   ├── Experience.jsx   # Work experience & education
│   ├── Contact.jsx      # Contact form and info
│   └── Footer.jsx       # Footer section
├── data/
│   └── portfolioData.js # All portfolio content and data
├── assets/              # Images and static assets
├── App.jsx              # Main application component
├── App.css              # Styles and responsive design
└── main.jsx             # Application entry point
```

## 🛠️ Setup and Installation

1. **Clone or download** this project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** and navigate to `http://localhost:5173`

## ✏️ Customization Guide

### 1. Personal Information
Edit `src/data/portfolioData.js` and update the following sections:

#### Personal Info
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  // ... other social links
};
```

#### Hero Section
```javascript
export const heroData = {
  greeting: "Hi, I'm",
  name: personalInfo.name,
  title: personalInfo.title,
  description: "Your professional description here...",
};
```

### 2. About Section
Update your bio and statistics:
```javascript
export const aboutData = {
  description: [
    "Your first paragraph about yourself...",
    "Your second paragraph..."
  ],
  stats: [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "25+", label: "Happy Clients" },
  ],
};
```

### 3. Skills
Customize your skills and proficiency levels:
```javascript
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      // Add your skills with levels (0-100)
    ]
  },
  // Add more categories as needed
];
```

### 4. Projects
Add your portfolio projects:
```javascript
export const projectsData = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "/images/project-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/username/repo",
    featured: true, // Show in featured section
    category: "Full Stack"
  },
  // Add more projects
];
```

### 5. Experience & Education
Update your work experience and education:
```javascript
export const experienceData = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "Job description...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ]
  },
  // Add more experiences
];
```

### 6. Adding Images
1. Create folders in the `public` directory:
   ```
   public/
   ├── images/
   │   ├── projects/        # Project screenshots
   │   ├── profile/         # Profile photos
   │   └── og-image.jpg     # Social media preview image
   ```

2. Add your images and update the paths in `portfolioData.js`

### 7. Styling Customization
Edit `src/App.css` to customize:

#### Colors
```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #64748b;    /* Secondary color */
  --accent-color: #f59e0b;       /* Accent color */
  /* Update other color variables */
}
```

#### Fonts
```css
:root {
  --font-primary: 'Your Font', sans-serif;
}
```

## 🚀 Deployment

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run: `npm run deploy`

## 📧 Contact Form Setup

The contact form is currently set up with client-side validation. To make it functional:

1. **Using Formspree** (Recommended for beginners):
   - Sign up at [Formspree.io](https://formspree.io)
   - Replace the form action in `Contact.jsx`

2. **Using Netlify Forms**:
   - Add `netlify` attribute to the form
   - Add hidden input: `<input type="hidden" name="form-name" value="contact" />`

3. **Using EmailJS**:
   - Sign up at [EmailJS.com](https://www.emailjs.com)
   - Install EmailJS: `npm install emailjs-com`
   - Configure the service in `Contact.jsx`

## 🎨 Customization Tips

1. **Color Scheme**: Use tools like [Coolors.co](https://coolors.co) to generate color palettes
2. **Fonts**: Import Google Fonts in `index.html` or use system fonts
3. **Icons**: Replace emoji icons with Font Awesome or React Icons
4. **Animations**: Add Framer Motion for advanced animations
5. **Images**: Use tools like [Unsplash](https://unsplash.com) for placeholder images

## 📱 Responsive Design

The template is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Support

If you need help customizing this template:
1. Check the documentation above
2. Look at the code comments
3. Create an issue in the repository
4. Reach out for consultation

**Happy coding! 🚀**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
