# CleanLink Project Structure

## 📁 Directory Overview

This project has been refactored into a clean, modular, and professional structure following React best practices.

```
src/
├── components/           # Reusable UI components
│   ├── animations/      # Animation components (cleaning scenes)
│   │   ├── BroomSweep.jsx
│   │   ├── CleaningScene.jsx
│   │   ├── MopWipe.jsx
│   │   ├── SoapBubbles.jsx
│   │   ├── SprayBottle.jsx
│   │   └── TwinkleSparkle.jsx
│   ├── layout/          # Layout components (header, footer, menu)
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── MobileMenu.jsx
│   ├── ui/              # Small UI components
│   │   ├── BrandMark.jsx
│   │   ├── PageIntro.jsx
│   │   ├── Reveal.jsx
│   │   └── SectionLabel.jsx
│   ├── home/            # Home page specific components
│   │   ├── ScrollSequence.jsx
│   │   └── ScrollStep.jsx
│   └── system/          # System page specific components
│       ├── JourneyStage.jsx
│       ├── ProductMockup.jsx
│       └── SystemScrollJourney.jsx
├── pages/               # Page components (routes)
│   ├── HomePage.jsx
│   ├── StoryPage.jsx
│   ├── SystemPage.jsx
│   └── TeamPage.jsx
├── data/                # Static data and content
│   ├── journeyData.js   # Client journey steps
│   ├── systemData.js    # System features, roles, functionalities
│   └── teamData.js      # Team member information
├── utils/               # Utility functions and constants
│   └── animations.js    # Framer Motion animation variants
├── styles/              # CSS files
│   └── layout.css       # Component-specific styles
├── App.jsx              # Main app component (modular version)
├── App.old.jsx          # Backup of old monolithic version
├── main.jsx             # Entry point
└── styles.css           # Global styles
```

## 🎯 Key Improvements

### 1. **Separation of Concerns**
- **Components**: Reusable UI elements separated by function
- **Pages**: Route-specific components
- **Data**: Static content separated from presentation logic
- **Utils**: Shared utilities and constants

### 2. **Modular Architecture**
- Each component is in its own file
- Related components grouped in directories
- Easy to locate and maintain specific functionality

### 3. **Professional Organization**
- **animations/**: All animated cleaning-themed graphics
- **layout/**: Header, footer, and navigation components
- **ui/**: Small, reusable UI components
- **pages/**: Main route components (one per page)

### 4. **Data Separation**
- Team member data in `teamData.js`
- System features and roles in `systemData.js`
- Client journey steps in `journeyData.js`

## 📝 Component Breakdown

### Layout Components
- **Layout.jsx**: Main layout wrapper with header, footer, and mobile menu
- **Header.jsx**: Top navigation bar with desktop menu
- **Footer.jsx**: Site footer
- **MobileMenu.jsx**: Animated mobile navigation overlay

### Animation Components
- **BroomSweep.jsx**: Animated broom sweeping motion
- **MopWipe.jsx**: Animated mop wiping motion
- **SprayBottle.jsx**: Spray bottle with droplet animation
- **SoapBubbles.jsx**: Rising bubble animation
- **TwinkleSparkle.jsx**: Sparkle/twinkle effect
- **CleaningScene.jsx**: Composed cleaning scene with all animations

### UI Components
- **BrandMark.jsx**: CleanLink logo/brand mark
- **SectionLabel.jsx**: Numbered section headers
- **PageIntro.jsx**: Standardized page introduction section
- **Reveal.jsx**: Scroll-triggered reveal animation wrapper

### Page-Specific Components
- **ScrollSequence.jsx** (Home): Scroll-triggered story sequence
- **SystemScrollJourney.jsx** (System): Journey visualization
- **ProductMockup.jsx** (System): Product interface mockup
- **JourneyStage.jsx** (System): Individual journey step card

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Adding New Features

### Adding a New Page
1. Create page component in `src/pages/`
2. Import and add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/Header.jsx` and `MobileMenu.jsx`

### Adding a New Component
1. Determine category (animations, ui, layout, or page-specific)
2. Create component file in appropriate directory
3. Export and import where needed

### Adding Data
1. Add data to appropriate file in `src/data/`
2. Export the data structure
3. Import in components that need it

## 🎨 Styling Approach
- Global styles in `src/styles.css`
- Component-specific styles in `src/styles/layout.css`
- Inline styles for dynamic/animated properties

## 🔄 Migration Notes
- Original monolithic App.jsx backed up as `App.old.jsx`
- All functionality preserved in modular structure
- No breaking changes to user-facing features
- Same routing and navigation behavior

## 👥 Team Information
Team member data is now centralized in `src/data/teamData.js`:
- Easy to update member information
- Add photos, contact details, and links
- Consistent data structure across the app

## 📚 Best Practices Implemented
✅ Single Responsibility Principle - each component does one thing
✅ DRY (Don't Repeat Yourself) - shared code extracted
✅ Clear naming conventions
✅ Logical file organization
✅ Easy to navigate and maintain
✅ Scalable architecture for future growth

---

**Note**: This structure makes the codebase maintainable, testable, and ready for team collaboration.
