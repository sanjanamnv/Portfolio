# Personal Portfolio Website - Sri Lakshmi Sanjana M N V

A responsive, modern personal portfolio website built with **HTML5, CSS3, JavaScript, and Bootstrap 5** for academic submission and professional presentation.

---

## 1. Student Information

- **Full Name:** Sri Lakshmi Sanjana M N V
- **Degree:** Integrated M.Tech in Computer Science and Engineering (CSE)
- **Current Year:** 3rd Year
- **Institution:** VIT-AP University, Amaravati, Andhra Pradesh, India
- **Career Objective:** *"To become a skilled software engineer and build useful, innovative technology solutions."*

---

## 2. Technology Stack

- **HTML5:** Semantic markup, accessible landmarks, and meta tags.
- **CSS3:** Custom properties (CSS variables) for light/dark themes, responsive media queries, card styling, and subtle animations.
- **JavaScript (ES6+):** Pure vanilla JavaScript for theme toggle with `localStorage` persistence, category filtering, dynamic modal popups, real-time client-side form validation, back-to-top button, and auto-collapsing mobile navbar.
- **Bootstrap 5.3.3:** Responsive 12-column grid system, cards, forms, modals, and responsive utility classes loaded via CDN.
- **Bootstrap Icons 1.11.3:** Vector iconography loaded via CDN.
- **Google Fonts:** `Plus Jakarta Sans` for clean body typography and `Outfit` for bold, expressive headings.

---

## 3. Project Directory Structure

```text
portfolio/
├── index.html                   # Main semantic HTML5 webpage
├── css/
│   └── style.css                # Custom CSS styling & light/dark theme variables
├── js/
│   └── script.js                # Vanilla JavaScript interactions and validation
├── assets/
│   ├── images/
│   │   ├── avatar.svg           # Professional illustrated developer avatar
│   │   ├── foodnest.svg         # FoodNest food-ordering concept illustration
│   │   ├── shopnest.svg         # ShopNest shopping website concept illustration
│   │   ├── lg-smartsell.svg     # LG SmartSell service mobile app illustration
│   │   ├── task-manager.svg     # Student Task Manager concept illustration
│   │   ├── expense-tracker.svg  # Personal Expense Tracker concept illustration
│   │   └── favicon.svg          # Stylized monogram favicon
│   └── resume.pdf               # Resume starter document / replacement location
└── README.md                    # Comprehensive documentation and setup guide
```

---

## 4. How to Run Locally

### Option A: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by *Ritwick Dey*) from the VS Code Extensions marketplace (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Right-click `index.html` in the file explorer.
4. Select **"Open with Live Server"**.
5. Your default browser will launch at `http://127.0.0.1:5500/index.html`.

### Option B: Direct Browser Opening (No Server Needed)
1. Navigate to the project folder on your computer.
2. Double-click `index.html` (or right-click -> **Open with** -> Google Chrome / Mozilla Firefox / Microsoft Edge / Safari).
3. The portfolio will load with all features, SVG vector illustrations, and responsive layout.

---

## 5. How to Customize Your Portfolio

### 1. Replacing the Avatar with Your Own Photograph
1. Prepare your photo in JPG, PNG, or WebP format (a square 1:1 ratio works best, e.g., 600x600 px).
2. Save your photo in the `assets/images/` folder as `profile.jpg`.
3. Open `index.html`, find line ~130:
   ```html
   <img src="./assets/images/avatar.svg" alt="Illustrated portrait of Sri Lakshmi Sanjana M N V" class="avatar-img" />
   ```
4. Change `avatar.svg` to `profile.jpg`:
   ```html
   <img src="./assets/images/profile.jpg" alt="Photograph of Sri Lakshmi Sanjana M N V" class="avatar-img" />
   ```

### 2. Updating Personal Email, GitHub, and LinkedIn Links
In `index.html`:
- **Email:** Search for `your.email@example.com` and replace it with your personal email address.
- **GitHub:** Search for `Add your GitHub profile URL` and update the `href` attribute with `https://github.com/your-username`.
- **LinkedIn:** Search for `Add your LinkedIn profile URL` and update the `href` attribute with `https://linkedin.com/in/your-username`.

### 3. Adding Your Real Resume PDF
1. Export your curriculum vitae / resume as a PDF file from Microsoft Word, Canva, LaTeX, or Google Docs.
2. Name the file exactly **`resume.pdf`**.
3. Place it inside the `assets/` directory (replacing the starter placeholder file).
4. The **"Download Resume"** buttons in the Hero section and Contact section will immediately download your authentic resume document.

### 4. Updating Education Details (CGPA, Start & Graduation Years)
In `index.html` under `<section id="education">`:
- Update `[Editable: e.g. 2023 – 2028]` with your actual admission year and expected graduation year.
- Update `[Editable placeholder - Add once confirmed]` with your verified CGPA or percentage when you wish to publish it.
- Update the second card with your actual Higher Secondary / Intermediate junior college and 12th board marks.

### 5. Editing Projects or Adding New Projects
- In `index.html`: Each project is contained inside a `<div class="col-lg-4 col-md-6 project-item" data-category="web">`.
- In `js/script.js`: Update the `projectData` dictionary to customize the descriptions, technology badges, and key architecture points shown in the "View Details" modal.

---

## 6. Key Interactive Features

1. **Light / Dark Mode Switcher:** Located in the top navigation bar. Automatically reads the system's preferred color scheme on first visit and persists the user's manual selection across browser refreshes via `localStorage`.
2. **Interactive Project Filter Tabs:** Click "All Projects", "Web Development", "Mobile Applications", or "Other Concepts" to dynamically filter project cards with smooth CSS transitions.
3. **Project Details Modal:** Clicking "View Details" on any card opens a Bootstrap modal populated with rich architectural highlights and technology stack badges.
4. **Client-Side Contact Form Validation:**
   - Validates all required fields: Name ($\ge 2$ characters), Email (standard email regex), Subject ($\ge 3$ characters), and Message ($\ge 10$ characters).
   - Provides live, field-specific validation states (`.is-invalid` and `.is-valid`) as the user types.
   - Prevents page reload and displays an accessible status alert clearly stating that the demo passed client-side validation.
5. **Mobile Navigation Auto-Collapse:** Mobile menu automatically closes when any anchor link is clicked for seamless single-page navigation.
6. **Back-to-Top Button:** Appears smoothly when scrolling down past 300px and returns the user to the top with a smooth scroll.
7. **Accessibility & Reduced Motion:** Full compliance with `prefers-reduced-motion` to disable animations for users who prefer reduced motion.

---

## 7. Assignment Evaluation Checklist

- [x] Full name displayed: **Sri Lakshmi Sanjana M N V**
- [x] Degree: **Integrated M.Tech in Computer Science and Engineering (CSE)**
- [x] Current year: **3rd Year**
- [x] University: **VIT-AP University**
- [x] Career objective: *"To become a skilled software engineer and build useful, innovative technology solutions."*
- [x] Plain HTML5, CSS3, JavaScript, and Bootstrap 5 (no React/Node runtime required).
- [x] Responsive navigation bar with Home, About Me, Education, Skills, Projects, Contact links.
- [x] Mobile hamburger menu opens, closes, and auto-collapses on link selection.
- [x] Hero section with professional illustrated avatar and action buttons.
- [x] About Me section with student profile and confirmed career objective.
- [x] Education section with confirmed VIT-AP program and editable qualification placeholders.
- [x] Technical Skills section with categorized cards and "Learning", "Familiar", "Practicing" indicators.
- [x] Project gallery featuring **FoodNest**, **ShopNest**, **LG SmartSell**, plus sample concepts with working filters.
- [x] Contact section with client-side JavaScript validation (Name, Email, Subject, Message).
- [x] Local resume download feature pointing to `assets/resume.pdf`.
- [x] Working Light / Dark theme toggle with `localStorage` persistence.
- [x] Dynamic footer copyright year and Back-to-Top button.
