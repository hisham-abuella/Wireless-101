# Component Patterns Reference

## Page Anatomy

### Landing Page (`index.html`)
1. Navbar (fixed, blur on scroll)
2. Hero section (two-column grid: text + floating decorative shapes)
3. Origin story section (timeline)
4. Course cards grid
5. How-it-works steps
6. Testimonials
7. CTA section
8. Footer (4-column grid)

### Course Page (`courses/{id}/index.html`)
1. Navbar
2. Course hero (dark bg, breadcrumb, title, meta stats, tags)
3. Two-column layout: modules list + sticky sidebar
4. Learning outcomes
5. Prerequisites
6. Footer

### Lesson Page — Article (`lessons/m{M}-l{L}.html`)
1. Navbar
2. Lesson hero (dark bg, breadcrumb, badge, title, meta)
3. Article content (max-width 720px, cream bg)
4. Equation blocks, callouts, timelines, takeaways
5. Lesson nav (prev / overview / next)
6. Footer

### Lesson Page — Slides (`lessons/m{M}-l{L}-slides.html`)
- 9:16 Instagram Story format (360×640px frames)
- Variants: `slide--dark`, `slide--light`, `slide--amber`, `slide--gradient`
- Grain texture overlay on each slide
- Progress dots at top

## Reusable Components

### Callout Box
```html
<div class="callout-box fade-up">
  <div class="callout-icon">
    <svg>...</svg>
  </div>
  <div class="callout-content">
    <strong>Title</strong>
    <p>Description text</p>
  </div>
</div>
```

### Timeline
```html
<div class="timeline fade-up">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-year">1865</div>
    <div class="timeline-desc">Description</div>
  </div>
</div>
```

### Generations Visual (Horizontal)
```html
<div class="generations-visual fade-up">
  <div class="gen-track">
    <div class="gen-connector"></div>
    <div class="gen-item">
      <div class="gen-bubble">1G</div>
      <div class="gen-label">Label</div>
      <div class="gen-era">Year</div>
    </div>
  </div>
</div>
```

### Takeaways
```html
<div class="takeaways fade-up">
  <div class="takeaways-label">
    <svg>...</svg> KEY TAKEAWAYS
  </div>
  <ul>
    <li>Takeaway point</li>
  </ul>
</div>
```

### Course Card (Landing Page)
```html
<a href="..." class="course-card card fade-up stagger-{N}">
  <div class="course-header">
    <div class="course-header-row">
      <span class="course-code badge badge-navy">WRL-101</span>
      <span class="badge badge-green">Available</span>
    </div>
    <h3 class="course-title">Course Title</h3>
    <p class="course-desc">Description</p>
  </div>
  <div class="course-meta">
    <span class="course-meta-item"><svg>...</svg> 12 Modules</span>
    <span class="course-meta-item"><svg>...</svg> ~18 hrs</span>
    <span class="course-meta-item"><svg>...</svg> 25 Labs</span>
  </div>
  <div class="course-topics">
    <span class="course-topics-label">Key Topics:</span>
    <span class="course-topic"><span class="topic-dot amber-dot"></span> Topic</span>
  </div>
  <div class="course-cta">
    Start Course <span class="course-cta-arrow"><svg>→</svg></span>
  </div>
</a>
```

### Module Accordion (Course Page)
```html
<div class="module card">
  <div class="module-header" onclick="toggleModule(N)">
    <div class="module-num">01</div>
    <div class="module-info">
      <h3 class="module-title">Module Title</h3>
      <div class="module-meta">
        <span>N lessons</span>
        <span>~Xh XXm</span>
      </div>
    </div>
    <svg class="module-chevron">...</svg>
  </div>
  <div class="module-body" id="module-N">
    <a class="lesson-item" href="...">
      <span class="lesson-num">1.1</span>
      <span class="lesson-title">Lesson Title</span>
      <span class="lesson-type">Article</span>
    </a>
  </div>
</div>
```

## Decorative Elements
- **Dot grid:** radial gradient masked repeating dots background
- **Floating shapes:** absolute positioned divs with `float-a`/`float-b` animation
- **Gradient orbs:** blurred circles with amber/sage gradients
- **Grain overlay:** SVG fractalNoise filter at 2.5% opacity on body::after
