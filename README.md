# 🚗 Khattak Motors

A modern, responsive car dealership website built with **HTML, CSS, and JavaScript**.
The project presents a premium automotive showroom experience for **Khattak Motors**, a fictional dealership based in Peshawar, Pakistan.

## ✨ Features

* 🏎️ Modern car dealership landing page
* 📱 Fully responsive design for mobile, tablet, and desktop
* 🚘 Featured vehicle inventory
* 🔎 Inventory filtering by:

  * Body type
  * Car make
  * Price range
* 📋 Vehicle specifications including:

  * Model year
  * Engine capacity
  * Transmission
  * Mileage
  * Price
* 📲 Mobile navigation menu
* 🎨 Premium dark automotive-themed UI
* ✨ Scroll-based card reveal animations
* 📌 Sticky navigation header
* 🔄 Resettable inventory filters
* 📞 Test-drive and enquiry call-to-action buttons
* 🛠️ Workshop and dealership information
* 📧 Contact information
* 📬 Newsletter subscription UI
* ♿ Basic accessibility considerations such as `aria-labels` and visible focus states
* ⚡ No frameworks or build tools required

## 🛠️ Technologies Used

* **HTML5** — Page structure and semantic markup
* **CSS3** — Responsive layout, animations, styling, and media queries
* **Vanilla JavaScript** — Navigation, inventory filtering, animations, and dynamic footer year
* **Google Fonts**

  * Big Shoulders Display
  * Archivo
  * IBM Plex Mono
* **Unsplash** — Vehicle and workshop imagery

## 📂 Project Structure

```text
khattak-motors/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

No installation or dependencies are required.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### 2. Open the project

Navigate into the project directory:

```bash
cd YOUR-REPOSITORY
```

### 3. Run the website

Simply open:

```text
index.html
```

in your browser.

You can also use **VS Code + Live Server** for a better development experience.

## 🎯 Website Sections

### Hero Section

Introduces Khattak Motors with a prominent call-to-action for viewing the inventory and booking a test drive.

### Featured Inventory

The website currently displays six featured vehicles, including:

* Toyota Corolla Altis Grande
* Honda Civic Oriel
* Suzuki Alto VXL AGS
* KIA Sportage FWD
* Suzuki Cultus VXL
* Hyundai Tucson

Each vehicle includes its year, color, engine capacity, transmission, mileage, availability status, and price.

### Inventory Filtering

Users can filter vehicles by:

* **Body Type:** Sedan, Hatchback, SUV
* **Make:** Toyota, Honda, Suzuki, KIA, Hyundai
* **Price:** Under Rs 70 Lac / Rs 70 Lac and above

The filtering system is implemented using vanilla JavaScript and dynamically shows or hides matching vehicle cards.

### Why Buy From Us

Highlights three dealership features:

* Certified vehicle inspection
* Flexible financing
* Nationwide trade-ins

### Workshop

A dedicated section describing the dealership's workshop and vehicle inspection process.

### About the Developer

The project includes an About section identifying **Muhammad Moeed** as the developer and describing the project as a hands-on web development project.

## 🎨 Design

The interface uses a premium automotive-inspired visual system featuring:

* Dark charcoal backgrounds
* Brass/gold accent colors
* Green secondary accents
* Large automotive-style typography
* Minimal borders and cards
* Responsive layouts
* Subtle hover and scroll animations

The main design tokens and responsive breakpoints are defined in `style.css`.

## 📱 Responsive Design

The layout adapts across different screen sizes:

| Device     | Layout                                         |
| ---------- | ---------------------------------------------- |
| 📱 Mobile  | Single-column layout with mobile navigation    |
| 📲 Tablet  | Two-column vehicle grid                        |
| 💻 Desktop | Three-column vehicle grid with sidebar filters |

The CSS uses responsive breakpoints at **768px** and **1024px**.

## 🧠 JavaScript Functionality

`script.js` handles the interactive functionality of the website, including:

* Sticky header behavior
* Mobile menu toggle
* Mobile filter drawer
* Body-type filtering
* Make filtering
* Price filtering
* Reset filters
* Empty inventory state
* Scroll-reveal animations
* Automatic copyright year

## 🔮 Future Improvements

Potential improvements for future versions include:

* [ ] Connect inventory to a real database
* [ ] Add individual vehicle detail pages
* [ ] Add vehicle search
* [ ] Add price sorting
* [ ] Add an actual test-drive booking system
* [ ] Connect the newsletter form to a backend
* [ ] Add real social media links
* [ ] Add Google Maps dealership location
* [ ] Add customer reviews
* [ ] Add authentication for dealership staff
* [ ] Add an admin dashboard for inventory management
* [ ] Optimize and self-host vehicle images
* [ ] Add SEO metadata and Open Graph tags

## 👨‍💻 Developer

**Muhammad Moeed**

BS Computer Systems Student
Embedded Systems & Digital Design
Full Stack Web Development

This project was created as a hands-on web development project focusing on responsive UI design, frontend development, and interactive functionality.

## 📄 License

This project is intended for educational and portfolio purposes.

---

⭐ If you found this project interesting, consider giving the repository a star!
