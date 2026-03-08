# Story Slides — Design & Implementation Reference

Full-screen, audio-driven, mobile-first story format for lesson content. Each lesson's article (`m{M}-l{L}.html`) has a companion story (`m{M}-l{L}-slides.html`).

## Page Structure

```html
<html lang="en"> <!-- or lang="ar" dir="rtl" for Arabic -->
<body>
  <div class="story" id="story">
    <div class="progress" id="prog"></div>       <!-- segmented progress bar -->
    <div class="ctrl">...</div>                   <!-- top controls -->
    <div class="nav-arrows">...</div>             <!-- bottom nav buttons -->
    <div class="s s--ink" data-audio="s1-intro">  <!-- individual slides -->
      ...
    </div>
  </div>
  <audio id="audio" preload="none"></audio>
</body>
```

All CSS and JS are **inline** (self-contained pages, no external stylesheet).

---

## Slide Anatomy

```html
<div class="s s--ink" data-audio="s1-intro">
  <!-- Decorative orbs -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>

  <!-- Header -->
  <div class="s-top">
    <div class="s-brand">
      <div class="s-brand-dot"></div>
      <div class="s-brand-name">Wireless 101</div>
    </div>
    <div class="s-tag">M01 &middot; L01</div>
  </div>

  <!-- Content -->
  <div class="s-body">
    <div class="s-year">INTRO</div>
    <h2 class="s-title">A <i>Brief</i> History</h2>
    <p class="s-text">Content with <strong>emphasis</strong></p>
    <!-- Optional components: s-card, s-stats, s-list, s-equation, s-timeline, wave-canvas, gen-bars -->
  </div>

  <!-- Footer -->
  <div class="s-foot">
    <div class="s-pg">01 / 14</div>
  </div>
</div>
```

---

## Slide Color Variants

| Class | Background | Text | Accent | Use Case |
|-------|-----------|------|--------|----------|
| `s--ink` | Dark navy gradient | Cream | Amber | Default, intro/outro |
| `s--cream` | Light cream | Ink | Amber | High-contrast content |
| `s--amber` | Golden gradient | Ink | Ink | Accent/highlight slides |
| `s--deep` | Deep blue gradient | Cream | Amber | Technical/equation slides |
| `s--teal` | Teal/cyan gradient | Cream | Amber | Secondary accent slides |

Alternate variants across slides for visual rhythm.

---

## Slide-Specific Color Palette

```css
--ink: #080d14;           /* Darker navy (deeper than main theme) */
--ink-mid: #0f1923;
--ink-light: #172435;
--amber: #d4a24a;         /* Warmer, softer gold */
--amber-glow: #e8b44e;
--cream: #f0ece4;         /* Warmer cream */
--cream-dim: #d8d3c9;
--paper: #e8e3d9;
--teal: #3a7d7e;          /* Secondary accent */
--rose: #c4616a;          /* Reserved for future use */
```

---

## Typography (Slides)

| Element | Size | Font | Weight | Notes |
|---------|------|------|--------|-------|
| `.s-year` | 0.62–0.65rem | Mono | 700 | Uppercase, 200% letter-spacing |
| `.s-title` | clamp(1.6rem, 5vw, 2.2rem) | Display/Serif | 400 (EN) / 700 (AR) | `<i>` tags get accent color |
| `.s-text` | clamp(0.82rem, 2.2vw, 0.95rem) | Body | 400 | opacity: 0.75, line-height: 1.7–1.8 |
| `.s-card-label` | 0.52–0.55rem | Mono | — | Uppercase, 0.18em tracking |
| `.s-card-value` | clamp(0.82rem, 2vw, 0.95rem) | Mono/Body | — | — |
| `.s-stat-val` | clamp(0.95rem, 2.5vw, 1.15rem) | Serif | 400–700 | — |
| `.s-list li` | clamp(0.8rem, 2.1vw, 0.92rem) | Body | — | — |

**Fonts (EN):** Instrument Serif (display), DM Sans (body), Space Mono (mono)
**Fonts (AR):** Noto Sans Arabic (display + body), Space Mono (mono)

---

## Content Components

### Card
```html
<div class="s-card">
  <div class="s-card-label">LABEL</div>
  <div class="s-card-value">Value text</div>
</div>
```

### Stats Row
```html
<div class="s-stats">
  <div class="s-stat">
    <div class="s-stat-val">Value</div>
    <div class="s-stat-label">LABEL</div>
  </div>
  <!-- more s-stat blocks -->
</div>
```

### List
```html
<ul class="s-list">
  <li><strong>Bold part</strong> — description</li>
</ul>
```
Bullets are amber/teal 4px circles via `::before`.

### Equation
```html
<div class="s-equation">
  <div class="s-eq-label">Equation Name</div>
  <div id="eq-unique-id"></div>
</div>
```
Container is `direction: ltr` (math never flips). Label follows page direction.

### Timeline
```html
<div class="s-timeline">
  <div class="s-tl-item">
    <strong>1887</strong> — Description
  </div>
</div>
```
Dots via `::before` (amber border, ink fill). Staggered entrance animations.

### Wave Canvas
```html
<canvas class="wave-canvas" id="waveCanvas"></canvas>
```
Animated sine/cosine waves — amber for E-field, teal dashed for B-field.

### Generation Bars
```html
<div class="gen-bars">
  <div class="gen-bar" style="--h:80%"><span>1G</span></div>
  <!-- more bars -->
</div>
```

---

## Navigation & Controls

### Progress Bar
- Built dynamically: one `.progress-seg` per slide
- `.progress-fill` inside each segment animates `width: 0 → 100%` over audio duration
- `.done` class marks completed segments
- Always `direction: ltr`

### Top Controls (`.ctrl`)
- **Article link** — SVG book icon, links to corresponding article page
- **Audio toggle** — equalizer bars (`.eq`) animate when playing, muted icon when off

### Navigation Arrows (`.nav-arrows`)
- Bottom-center, 48×48px circular buttons with backdrop blur
- `.disabled` class at boundaries (opacity: 0.2)
- Touch-friendly: `-webkit-tap-highlight-color: transparent`, scale feedback on `:active`

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `ArrowRight` / `Space` | Next slide |
| `ArrowLeft` | Previous slide |
| `M` | Toggle mute |

---

## JavaScript Core

### Navigation
```js
var cur = 0;
function go(n) {
  if (n < 0 || n >= slides.length) return;
  story.classList.add('flash');                    // transition flash
  setTimeout(() => story.classList.remove('flash'), 200);
  cur = n;
  slides.forEach((s, i) => s.classList.toggle('on', i === cur));
  // Update nav arrow disabled states
  // Load and play audio (or auto-advance at 8s if muted)
}
```

### Audio Sync
- `data-audio` attribute → maps to `audio/{lang}/{course}/m{M}-l{L}/{id}.mp3`
- Progress fill transition matches `audio.duration`
- On `ended` event: 400ms delay → advance to next slide
- Muted mode: 8-second auto-advance per slide

### KaTeX Rendering
```js
function renderEqs() {
  if (typeof katex === 'undefined') { setTimeout(renderEqs, 200); return; }
  var el = document.getElementById('eq-id');
  if (el) katex.render('\\LaTeX', el, { displayMode: true, throwOnError: false });
}
renderEqs();
```

---

## Entrance Animations

| Element | Animation | Timing |
|---------|-----------|--------|
| `.s-year` | fadeUp | 0.4s ease, 0.05s delay |
| `.s-title` | titleReveal | 0.6s cubic-bezier(0.22,1,0.36,1), 0.1s delay |
| `.s-text` | fadeUp | 0.45s ease, 0.2s delay |
| `.s-list li` | fadeSlideIn | 0.4s ease, staggered by 0.1s per item |
| `.s-stat` | popIn | 0.4s cubic-bezier(0.34,1.56,0.64,1), 0.3s delay |
| `.s-tl-item` | slideIn | staggered |
| `.orb-1` | orbDrift1 | 8s ease-in-out infinite |
| `.orb-2` | orbDrift2 | 10s ease-in-out infinite |

Animations trigger when slide gets `.on` class.

---

## Decorative Elements

- **Orbs** — 200–300px blurred circles (amber + teal), opacity 0.12, float continuously
- **Grain overlay** — `::after` pseudo on every `.s`, SVG noise filter at 3.5% opacity
- **Flash transition** — `.story.flash::before` white flash between slides

---

## Responsive Behavior

| Breakpoint | Container | Border Radius | Padding |
|------------|-----------|---------------|---------|
| < 600px | 100vw × 100vh | 0 | 4rem 1.75rem 1.75rem |
| ≥ 400px | 100vw × 100vh | 0 | 4.5rem 2.25rem 2rem |
| ≥ 600px | max 480px × 92vh | 24px | 4.5rem 2.75rem 2.5rem |
| ≥ 1000px | max 500px × 90vh | 24px | 4.5rem 2.75rem 2.5rem |

Desktop shows a phone-like frame with box-shadow and rounded corners.

---

## RTL Adjustments for Stories

- `<html lang="ar" dir="rtl">` — no external RTL stylesheet needed (inline CSS handles it)
- Font stack swaps to Noto Sans Arabic for display and body
- `.s-title` weight bumps to 700 for Arabic
- `.s-tag`, `.s-pg`, `.progress` forced `direction: ltr` (numbers/codes stay LTR)
- `.s-equation` forced `direction: ltr`; `.s-eq-label` follows page direction
- Navigation arrow SVGs naturally flip in RTL context
- Audio paths: `audio/ar/{course}/...` instead of `audio/en/{course}/...`

---

## Building a New Story Slide Lesson

1. Copy from `courses/wrl101/lessons/m1-l1-slides.html`
2. Update `<title>`, meta tags, brand name, and `.s-tag` module/lesson code
3. Replace slide content — aim for 10–15 slides per lesson
4. Alternate color variants for visual rhythm (e.g., ink → cream → amber → ink → deep)
5. Set `data-audio` attributes matching transcript segment IDs
6. Add KaTeX equations where needed using `.s-equation` component
7. Update page count in `.s-pg` footers
8. Create Arabic version in `ar/courses/{id}/lessons/` — swap fonts, direction, content
9. Generate audio files via `scripts/generate-audio.js`
10. Link the article page to the story via the control button (and vice versa)

---

## Don'ts (Stories)

- Don't use external CSS files — all styles are inline per story page
- Don't exceed ~15 slides — keep stories concise and focused
- Don't skip the grain overlay or orb decorations
- Don't use the same color variant for consecutive slides
- Don't forget `direction: ltr` on equations and progress bars in RTL
- Don't use hover-dependent interactions — slides must work on touch
