# CleanLink Developer Guide

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

## 📖 Project Overview

CleanLink is a showcase website for a cleaning services management platform. The project demonstrates a complete web application with animations, responsive design, and professional code organization.

## 🏗️ Architecture

### Component Hierarchy

```
App
└── Layout
    ├── Header
    ├── MobileMenu (conditional)
    ├── Page (HomePage | StoryPage | SystemPage | TeamPage)
    └── Footer
```

### Routing Structure

- `/` - Home page
- `/story` - Company story and problem statement  
- `/system` - System features and workflow
- `/team` - Team member profiles

## 📂 File Organization

### `/src/components/`

#### `animations/`
Self-contained animated graphics using Framer Motion:
- Independent, reusable animation components
- No external dependencies beyond Framer Motion and Lucide icons
- Used throughout pages for visual storytelling

#### `layout/`
Core layout structure:
- **Layout.jsx**: Main wrapper with header, footer, and mobile menu logic
- **Header.jsx**: Desktop navigation and branding
- **MobileMenu.jsx**: Slide-in mobile navigation
- **Footer.jsx**: Site footer with branding and metadata

#### `ui/`
Small, reusable UI components:
- **BrandMark**: CleanLink logo component
- **PageIntro**: Standardized page introduction section
- **Reveal**: Scroll-triggered animation wrapper
- **SectionLabel**: Numbered section headers

#### `home/`, `system/`
Page-specific components for complex features

### `/src/pages/`
Route-level components:
- One file per route
- Compose smaller components into full pages
- Handle page-level layout and data

### `/src/data/`
Static data separated from presentation:
- **teamData.js**: Team member information
- **systemData.js**: Features, roles, functionalities
- **journeyData.js**: Client journey steps

### `/src/utils/`
Shared utilities:
- **animations.js**: Framer Motion variants used across components

### `/src/styles/`
CSS files:
- **layout.css**: Component-specific styles
- **styles.css** (root): Global styles and design system

## 🎨 Design System

### Colors
```css
Primary: #3fa66b (green)
Accent Yellow: #f6ca4b
Accent Blue: #68c8ee
Accent Purple: #b88ad8
Dark: #17171a
Light: #fdf6e3
```

### Typography
- Headers: System font stack
- Body: Optimized for readability
- Consistent sizing scale

### Spacing
- Base unit: 8px
- Consistent padding and margins
- Responsive breakpoints

## 🔧 Development Workflow

### Adding a New Component

1. **Determine category**:
   - Is it an animation? → `components/animations/`
   - Is it layout? → `components/layout/`
   - Is it a small UI element? → `components/ui/`
   - Is it page-specific? → `components/[page-name]/`

2. **Create the file**:
   ```jsx
   // src/components/ui/MyComponent.jsx
   export default function MyComponent({ prop1, prop2 }) {
     return (
       <div className="my-component">
         {/* Component content */}
       </div>
     );
   }
   ```

3. **Add exports** to the relevant `index.js` if applicable

4. **Import and use**:
   ```jsx
   import MyComponent from './components/ui/MyComponent';
   // or
   import { MyComponent } from './components/ui';
   ```

### Modifying Data

All static content lives in `/src/data/`:

**Team Members** (`teamData.js`):
```javascript
export const teamSlots = [
  {
    code: "01",
    name: "John Doe",
    role: "Software Engineer",
    note: "Backend and API development",
    email: "john@example.com",
    phone: "123-456-7890",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    photo: "/team/john.jpg"
  },
  // ...
];
```

**System Features** (`systemData.js`):
- Add/edit functionalities
- Modify user roles
- Update future scope items

**Journey Steps** (`journeyData.js`):
- Add/edit client journey steps
- Update icons and colors

### Creating a New Page

1. **Create page component**:
   ```jsx
   // src/pages/NewPage.jsx
   import PageIntro from '../components/ui/PageIntro';
   
   export default function NewPage() {
     return (
       <main id="main-content">
         <PageIntro 
           index="01"
           eyebrow="New Section"
           title="Page Title"
           copy="Page description"
         />
         {/* More sections */}
       </main>
     );
   }
   ```

2. **Add route** in `App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   // ...
   <Route path="/new" element={<NewPage/>}/>
   ```

3. **Add navigation** in `Header.jsx` and `MobileMenu.jsx`:
   ```jsx
   const nav = [
     // ... existing routes
     ["/new", "New Page"]
   ];
   ```

## 🎬 Animation Guidelines

### Using Framer Motion

**Reveal on scroll**:
```jsx
import { motion } from "framer-motion";
import { reveal } from "../utils/animations";

<motion.div variants={reveal}>
  Content appears on scroll
</motion.div>
```

**Stagger children**:
```jsx
import { stagger } from "../utils/animations";

<motion.div variants={stagger}>
  <motion.div variants={reveal}>Child 1</motion.div>
  <motion.div variants={reveal}>Child 2</motion.div>
</motion.div>
```

### Performance Tips
- Use `useReducedMotion()` for accessibility
- Prefer `transform` and `opacity` for animations
- Use `viewport={{ once: true }}` for scroll animations

## 🧪 Testing Checklist

Before committing:
- ✅ All pages load without errors
- ✅ Mobile menu opens and closes correctly
- ✅ Navigation works on all routes
- ✅ Animations run smoothly
- ✅ Responsive on mobile, tablet, and desktop
- ✅ Console is free of errors/warnings

## 📱 Responsive Design

### Breakpoints
```css
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

### Mobile-First Approach
- Start with mobile styles
- Use media queries to enhance for larger screens
- Test on real devices when possible

## 🔍 Debugging Tips

### Common Issues

**Component not rendering**:
1. Check import path
2. Verify export syntax (default vs named)
3. Check for JSX syntax errors

**Animation not working**:
1. Verify Framer Motion is imported
2. Check `variants` are passed correctly
3. Ensure `initial` and `animate` props are set

**Route not found**:
1. Verify route path in `App.jsx`
2. Check Link `to` props match exactly
3. Ensure component is imported

## 🚢 Production Build

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

The build output goes to `/dist/` and is ready for deployment.

## 📝 Code Style

### Naming Conventions
- **Components**: PascalCase (`MyComponent.jsx`)
- **Utilities**: camelCase (`myUtility.js`)
- **CSS classes**: kebab-case (`.my-class`)
- **Files**: Same as component name

### Import Order
1. React and third-party libraries
2. Components
3. Utils and data
4. Styles

```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import MyComponent from "./MyComponent";
import { myUtil } from "../utils";
import "./styles.css";
```

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Commit with descriptive message
5. Create pull request

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

---

**Questions?** Check the PROJECT_STRUCTURE.md for architectural overview.
