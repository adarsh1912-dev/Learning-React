# Background Changer

A simple and interactive React application that allows users to change the background color of the screen with the click of a button. Built with React and styled using Tailwind CSS.

## 🚀 Features

- **Dynamic Background**: Click any color button to instantly change the background
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Includes hover effects and smooth color transitions
- **Modern UI**: Clean, modern button design with shadows and animations
- **Multiple Colors**: Choose from Red, Green, Blue, Purple, and Pink

## 🛠️ Technologies Used

- **React**: Frontend framework with hooks (useState)
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server
- **JavaScript (ES6+)**: Modern JavaScript features

## 📁 Project Structure

```
bg-changer/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bg-changer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 💻 Usage

1. The application starts with an olive-colored background
2. Click any of the colored buttons at the bottom of the screen
3. Watch as the background instantly changes to your selected color
4. Enjoy the smooth hover effects and button animations

## 🎨 Available Colors

- **Red** - Classic red background
- **Green** - Fresh green background  
- **Blue** - Calming blue background
- **Purple** - Rich purple background
- **Pink** - Soft pink background

## 🔧 Customization

### Adding New Colors

To add more color options, modify the button section in [`App.jsx`](bg-changer/src/App.jsx):

```jsx
<button
  onClick={() => setColor("your-color")}
  className='outline-none px-4 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-2xl active:scale-90 transition ease-in-out' 
  style={{backgroundColor: "your-color"}} 
>Your Color</button>
```

### Styling Modifications

The project uses Tailwind CSS classes. Key styling features:

- `duration-200`: Smooth background transition
- `hover:shadow-2xl`: Enhanced shadow on hover
- `active:scale-90`: Button press animation
- `rounded-full`: Circular button design

## 📱 Responsive Design

The application is fully responsive with:
- Fixed bottom navigation that works on all screen sizes
- Flexible button layout that wraps on smaller screens
- Touch-friendly button sizing for mobile devices

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🧰 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Learning Objectives

This project demonstrates:
- React functional components and hooks
- State management with `useState`
- Event handling in React
- Inline styling and dynamic CSS
- Tailwind CSS utility classes
- Responsive web design principles

## 🔮 Future Enhancements

- [ ] Add color picker functionality
- [ ] Include gradient backgrounds
- [ ] Save user's preferred color in localStorage
- [ ] Add keyboard shortcuts for color changes
- [ ] Include more advanced animations
- [ ] Add color accessibility features

---

**Built with ❤️ using React and Tailwind CSS**
