# Ironworks Motor Co. — Landing Page

A responsive landing page for a fictional heritage & performance car dealership, featuring a filterable inventory grid, sticky header, mobile navigation, and scroll animations. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

**[Live Demo](#)** ← replace with your deployed link (GitHub Pages / Netlify / Vercel)

## Features

- 🔍 **Live inventory filtering** — filter cars by body type, make, and price range, all combined in real time
- 📱 **Fully responsive** — custom layouts for mobile, tablet, and desktop, including a mobile filter drawer and hamburger nav
- ✨ **Scroll animations** — car cards reveal on scroll using the Intersection Observer API
- 🎨 **Sticky header** — gains a shadow/blur effect on scroll
- ♿ **Accessible** — semantic markup, `aria-expanded` states, `prefers-reduced-motion` support
- 🖋️ **Custom design system** — CSS custom properties for consistent theming (colors, radius, shadows)

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, CSS Grid, Flexbox, responsive breakpoints
- **Vanilla JavaScript** — DOM manipulation, event delegation, IntersectionObserver
- **Fonts** — Big Shoulders Display, Archivo, IBM Plex Mono (Google Fonts)

## Project Structure

```
├── index.html      # Markup and content
├── style.css       # Styling, layout, responsive design
├── script.js       # Filtering logic, nav toggle, scroll effects
└── README.md
```

## Getting Started

No build tools or dependencies required.

1. Clone the repo
   ```bash
   git clone https://github.com/yourusername/ironworks-motor-co.git
   ```
2. Open `index.html` in your browser — that's it.

## What I Learned / Focused On

- Building a working multi-filter system (body type + make + price) with plain JavaScript and `data-*` attributes instead of a framework
- Structuring CSS with custom properties for a maintainable design system
- Handling responsive layout shifts (mobile drawer → desktop sidebar) with minimal duplicated code

## Screenshots

*(Add 1–2 screenshots or a short GIF here — this matters a lot for design-heavy projects like this one)*

## License

MIT
