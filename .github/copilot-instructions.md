## JIGGY LENS Website — Copilot Instructions

### Project Overview

This is a **vanilla HTML/CSS/JavaScript portfolio website** for Jiggy Lens, a cinematic photographer based in Lagos. No build tools, frameworks, or external dependencies—just semantic HTML, responsive CSS, and vanilla JS for interactivity.

**Key Files:**
- [index.html](index.html) — Single-page structure with semantic sections
- [css/main.css](css/main.css) — All styling (mobile-first responsive)
- [js/main.js](js/main.js) — Hero slider, scroll animations, navigation

### Architecture

**Page Sections:**
1. **Header** — Fixed navigation (Gallery, About, Booking) + brand logo
2. **Hero** — Full-screen image slider with manual (buttons) + auto-play (5.2s interval)
3. **Gallery** — Categorized portfolio grids (Portraits, Events, Products) with fade-in scroll animations
4. **About** — Photographer bio (static section)
5. **Booking** — Contact CTA with email + social links
6. **Footer** — Copyright + link group

**Design System:**
- **Fonts:** Playfair Display (serif, headlines), Inter (sans-serif, body) — imported from Google Fonts
- **Colors:** `#f8f6f2` (cream bg), `#111` (near-black text), `white` (hero text)
- **Spacing:** 6% horizontal padding, clamp() for responsive font sizing
- **Effects:** CSS transforms (translateY, scale), opacity fade-ins, backdrop blur on header

### Development Workflows

**Local Preview:**
Simply open `index.html` in a browser—no server required.

**Image Updates:**
- All images are externally hosted (Postimg, Pexels CDN)
- Replace `src` URLs in `index.html` to swap images
- **For production:** Download images and self-host in an `assets/images/` folder; update paths

**Content Edits:**
- Text, headings, links → edit `index.html` directly
- Email/phone/social → search for contact info in footer & booking section
- Gallery labels → update `.item-label` spans in category blocks

**Styling Changes:**
- All CSS is in one file (`css/main.css`) for simplicity
- Responsive breakpoints: 1024px (tablet), 768px (mobile), 480px (small phones)
- Animation easing: `cubic-bezier(0.16,1,0.3,1)` for smooth feel

### Critical Patterns

**Image Optimization:**
- Gallery items use `object-fit: cover` + `object-position: 50% 30%` for intelligent cropping
- Hero slider uses `min-width: 100%` + `transform: translateX(-${idx*100}%)` for hardware acceleration
- Aspect ratios are CSS-only: portraits 3:4, events/products 16:9

**Interactive Elements:**
- **Slider:** Manual prev/next buttons toggle `goto()`, auto-play pauses on hover
- **Scroll fade-in:** Intersection Observer watches `.section` elements, adds `.visible` class when 20% in viewport
- **Active nav:** Tracks scroll position to highlight matching nav link (via `updateActiveNav()`)
- **Smooth scroll:** `scrollTo()` function for button CTAs

**Mobile Handling:**
- No touch event handlers needed—CSS handles hover/active states differently on mobile
- Flex direction changes at breakpoints (header stacks vertically at 768px)
- Font sizing uses `clamp(min, preferred, max)` for fluid scaling

### Common Tasks

**Add a new gallery category:**
1. Duplicate a `.category` block in the gallery section
2. Change `.category-title` text
3. Update `.gallery-grid` class (e.g., `fashion-grid`)
4. Add CSS rule: `.fashion-grid .gallery-item { aspect-ratio: 16/9; }`
5. Add 2–3 `.gallery-item` divs with `<img>` + `.item-label`

**Modify slider timing:**
- Change `interval = 5200` in `js/main.js` (milliseconds between slides)

**Update contact info:**
- Search `hello@jiggylens.com` in `index.html` for email
- Search `234XXXXXXXXXX` for WhatsApp link
- Update Instagram/X handles in footer + booking section

**Adjust hero overlay darkness:**
- Edit `.hero-overlay` gradient in `css/main.css` (currently `rgba(0,0,0,0.28)` to `rgba(0,0,0,0.85)`)

### Browser Support & Performance

- **Browsers:** Chrome/Edge 90+, Firefox 88+, Safari 14+, Mobile (iOS Safari, Chrome Mobile)
- **No dependencies:** Pure vanilla HTML/CSS/JS—instant loading
- **GPU acceleration:** Uses `transform`, `opacity` (avoid `left/top` animations)
- **Font loading:** Google Fonts async-imported (non-blocking)

### Accessibility Notes

- Semantic HTML5 (header, section, footer, nav)
- Image alt text provided for carousel slides
- Sufficient color contrast (dark text on light bg, light text on dark bg)
- Navigation links are accessible via keyboard (Tab navigation)

### Future Enhancements

Consider but **not yet implemented**:
- Contact form (booking integration)
- Image lazy-loading (for performance with many images)
- Dark mode toggle
- Lightbox/modal gallery view
- Blog or testimonials section
