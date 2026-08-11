# Elite Auto Gallery 🚗

A fully responsive, front-end car dealership website built for **Elite Auto Gallery**, a dealership based in Islamabad, F-8. Designed to feel like a premium product rather than a generic template — dark theme, brass accents, and a smooth, filterable inventory experience.

## 🔗 Live Demo
[splendid-nougat-0672bc.netlify.app](https://splendid-nougat-0672bc.netlify.app)

## 📋 Overview

This project showcases a modern dealership website with dynamic inventory filtering, scroll-based animations, and a fully responsive layout — built entirely with vanilla HTML, CSS, and JavaScript (no frameworks, no dependencies).

## ✨ Features

- **Dynamic Inventory Filtering** — Filter cars by body type, make, and price range in real time, with zero page reloads
- **Sticky Header** — Scroll-aware header with shadow/background transition
- **Reveal-on-Scroll Animations** — Car cards animate into view using the Intersection Observer API
- **Responsive Mobile Filters Drawer** — Collapsible filter panel on smaller screens
- **Mobile Navigation Menu** — Slide-down nav for mobile devices
- **Custom Design System** — Dark theme with brass/green accent palette, built entirely in CSS with custom properties (variables)
- **Fully Responsive** — Optimized layouts for mobile, tablet, and desktop
- **Accessibility Considerations** — Focus states, ARIA labels, and `prefers-reduced-motion` support

## 🛠️ Built With

- **HTML5** (98.7%) — Semantic markup
- **CSS3** (1.1%) — Custom properties, Grid, Flexbox, no frameworks
- **JavaScript** (0.2%) — DOM manipulation, event delegation, Intersection Observer API
- **Google Fonts** — Big Shoulders Display, Archivo, IBM Plex Mono

## 📁 Project Structure

```
├── index.html      # Main HTML structure
├── style.css       # All styling (design tokens, layout, responsive rules)
├── script.js       # Filtering logic, scroll effects, mobile nav
└── README.md
```

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/muhammadmoeed5124-design/internship-project-1.git
   ```
2. Navigate into the project folder
   ```bash
   cd internship-project-1
   ```
3. Open `index.html` in your browser — no build step or server required

## 🎯 Key Technical Highlights

- **Filter Logic**: Uses `dataset` attributes on car cards combined with array matching to filter inventory by multiple criteria simultaneously, without any page reloads or re-renders.
- **Scroll Animations**: Implemented with the Intersection Observer API instead of scroll event listeners for better performance.
- **CSS Architecture**: Token-based design system using CSS custom properties for consistent theming across the entire site.

## 📱 Responsive Breakpoints

- Mobile: default styles
- Tablet: `768px+`
- Desktop: `1024px+`

## 👤 Author

**Muhammad Moeed**
- GitHub: [@muhammadmoeed5124-design](https://github.com/muhammadmoeed5124-design)

## 📄 License

This project is open source and available for learning purposes.
