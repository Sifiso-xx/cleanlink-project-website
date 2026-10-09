# CleanLink Project Website

A professional, multi-page project showcase for Team 10's CleanLink system. Built with a modular architecture, animated storytelling, and comprehensive documentation.

## ✨ Features

- 🎨 Clean, modern, and responsive design
- 🎬 Smooth animated scroll sequences and transitions
- 📱 Mobile-first responsive layout with animated mobile menu
- 🎯 Interactive client journey visualization
- 👥 Team member profiles with contact information
- 🏗️ **Professional modular architecture** (newly refactored)
- ⚡ Fast development with Vite and HMR
- 📚 Comprehensive documentation

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open the local URL printed by Vite (typically `http://localhost:5173`)

## 📄 Pages

- **Home** (`/`) — Animated project introduction and value proposition
- **Story** (`/story`) — Company background and problem statement
- **System** (`/system`) — Six-stage animated solution journey, product surfaces and scope
- **Team** (`/team`) — Team member profiles with photos and contact info

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Professional animation library
- **React Router v6** - Client-side routing
- **Lucide React** - Modern icon library
- **CSS3** - Clean, maintainable styling

## 📁 NEW: Modular Structure

The project has been **completely refactored** into a professional, maintainable structure:

```
src/
├── components/          # Organized by function
│   ├── animations/     # Cleaning scene animations
│   ├── layout/         # Header, Footer, Menu
│   ├── ui/            # Reusable UI components
│   ├── home/          # Home page specific
│   └── system/        # System page specific
├── pages/             # One file per route
│   ├── HomePage.jsx
│   ├── StoryPage.jsx
│   ├── SystemPage.jsx
│   └── TeamPage.jsx
├── data/              # Separated static content
│   ├── teamData.js    # Team member info
│   ├── systemData.js  # Features and roles
│   └── journeyData.js # Client journey steps
├── utils/             # Shared utilities
└── styles/            # CSS files
```

### Benefits of New Structure

✅ **Modular** - Each component in its own file
✅ **Maintainable** - Easy to find and update code
✅ **Scalable** - Simple to add new features
✅ **Professional** - Industry best practices
✅ **Documented** - Comprehensive guides included

## 📚 Documentation

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Complete architectural breakdown
- **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** - Development guide with examples
- **[DESIGN.md](./DESIGN.md)** - Design system guidelines

## 🔧 Update Team Information

Team data is now centralized in `src/data/teamData.js`:

```javascript
export const teamSlots = [
  {
    code: "01",
    name: "Your Name",
    role: "Your Role",
    note: "What you worked on",
    email: "your@email.com",
    phone: "123-456-7890",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    photo: "/team/photo.jpg"  // Place photo in public/team/
  },
  // ...
];
```

## 🎯 Development Highlights

### Recent Major Refactor
- ✅ Transformed 300+ line monolithic `App.jsx` into modular structure
- ✅ 30+ separate component files organized by function
- ✅ Data extracted into dedicated files
- ✅ Index files for cleaner imports
- ✅ Full backward compatibility maintained
- ✅ Original backed up as `App.old.jsx`

### Code Quality
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Clear naming conventions
- Comprehensive comments
- Professional file organization

## 👥 Team 10 - 2026

- **Joshua Masunda** - Project Lead
- **Sifisokuhle Mavundla** - Software Engineer (Services & Mobile)
  - Email: m.sfiso@icloud.com
  - Phone: 067 240 8173
  - [GitHub](https://github.com/Sifiso-xx) | [LinkedIn](https://www.linkedin.com/in/sifisokuhle-mavundla)
- **TBD** - Software Engineer

## 🤝 Contributing

1. Review `DEVELOPER_GUIDE.md` for standards
2. Understand the component structure in `PROJECT_STRUCTURE.md`
3. Follow existing naming conventions
4. Test on multiple screen sizes
5. Document any new features

## 📝 Build & Deploy

```bash
# Production build
npm run build

# Files output to dist/
# Ready for static hosting (Vercel, Netlify, etc.)
```

## 🎨 Design System

- **Modular CSS** - Component-specific styles in `styles/layout.css`
- **Color System** - Accent colors for different sections
- **Animations** - Smooth Framer Motion transitions
- **Responsive** - Mobile-first approach with breakpoints
- **Accessibility** - Reduced motion support built-in

## 📄 License

University project showcase - Team 10, 2026

---

**Note**: This project now follows industry-standard React architecture and is ready for team collaboration and future expansion.

Built with ❤️ by Team 10
