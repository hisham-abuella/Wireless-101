# Wireless 101 — Project Guide

## Vision
An interactive, bilingual (English/Arabic) educational platform teaching wireless communications, signal processing, and related engineering topics. Pure static HTML — no frameworks, no build tools. Prioritizes clarity, beauty, and accessibility.

## Tech Stack
- **HTML5 / CSS3 / Vanilla JS** — static files, CDN dependencies only
- **KaTeX 0.16.9** — math equation rendering
- **ElevenLabs API** — TTS audio generation via `scripts/generate-audio.js`
- **GoatCounter** — privacy-friendly analytics

## Project Structure
```
├── index.html                    # EN landing page
├── ar/index.html                 # AR landing page (RTL)
├── courses/{id}/index.html       # Course overview pages
├── courses/{id}/lessons/m{M}-l{L}.html        # Lesson (article)
├── courses/{id}/lessons/m{M}-l{L}-slides.html # Lesson (story slides)
├── ar/courses/{id}/...           # Arabic mirrors
├── transcripts/{en|ar}/{id}/m{M}-l{L}.json    # TTS transcripts
├── audio/{en|ar}/{id}/m{M}-l{L}/              # Generated audio
├── theme.css                     # Shared design system (LTR)
├── theme-rtl.css                 # RTL overrides (load AFTER theme.css)
├── templates/slide-template.html # Slide format reference
├── course-structure.md           # Full curriculum outline
└── ref/                          # Detailed reference docs
```

**Course IDs:** `wrl101`, `dsp101`, `la101`, `ml101`, `stat101`
**Lesson naming:** `m{module}-l{lesson}.html` (e.g., `m1-l1.html`)

## Design Principles

1. **Technical Editorial aesthetic** — clean, typographic, magazine-quality
2. **Ink + Amber** palette on cream backgrounds — never flashy, always warm
3. **Grain texture** overlay on body for analog warmth
4. **Cards elevate on hover** with smooth cubic-bezier transitions
5. **Staggered fade-up entrances** via IntersectionObserver
6. **Mobile-first** responsive (breakpoints: 480px, 768px, 900px)
7. **No framework dependencies** — keep it vanilla and static

## Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#0f1b2d` | Primary dark, buttons, heroes |
| `--amber` | `#e8a838` | Accent, highlights, CTAs |
| `--cream` | `#faf8f4` | Page background |
| `--paper` | `#f4f1eb` | Footer, secondary surfaces |
| `--sage` | `#7c9a8e` | Secondary accent (sparingly) |

See `ref/design-tokens.md` for full token list.

## Typography
| Role | Font | Arabic Equivalent |
|------|------|-------------------|
| Display | Bricolage Grotesque | Noto Kufi Arabic |
| Body | Libre Franklin | IBM Plex Sans Arabic |
| Mono | JetBrains Mono | JetBrains Mono |

## Animations
- **`fade-up`** — entrance: `opacity 0→1, translateY 28px→0` with `.stagger-{1-6}` delay classes
- **`float-a` / `float-b`** — continuous floating for decorative elements
- **`pulse-beacon`** — pulsing dot (2.5s infinite)
- **`orbit-spin`** — slow rotation for orbital decorations (40-60s)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` everywhere

## KaTeX Equations
```html
<div class="equation-block fade-up">
  <div class="equation-block-label">
    <svg>...</svg> LABEL TEXT
  </div>
  <div id="eq-unique-id" class="equation-render"></div>
  <div class="equation-block-caption">Description</div>
</div>
```
```js
// Render with retry for async script loading
function renderEquations() {
  if (typeof katex === 'undefined') { setTimeout(renderEquations, 200); return; }
  var eqs = [
    ['eq-unique-id', '\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}']
  ];
  eqs.forEach(function(pair) {
    var el = document.getElementById(pair[0]);
    if (el) katex.render(pair[1], el, { displayMode: true, throwOnError: false });
  });
}
renderEquations();
```
- Always use `displayMode: true`, `throwOnError: false`
- Style: gradient background, 3px amber left border, rounded corners

## Arabic / RTL Content
- **File-based i18n** — separate HTML files per language, NOT string interpolation
- Arabic pages: `<html lang="ar" dir="rtl">` + load `theme-rtl.css` after `theme.css`
- RTL overrides use `html[dir="rtl"]` selector prefix
- Key reversals: flex-direction, margins, arrow SVGs (`scaleX(-1)`)
- Arabic fonts loaded only on AR pages via separate Google Fonts import
- Language switcher in navbar: `EN | عربي`
- See `ref/rtl-guide.md` for full RTL checklist

## Story Slides

Full-screen, audio-driven, mobile-first story format — each lesson article has a companion `-slides.html` file. Self-contained pages with all CSS/JS inline.

**Slide anatomy:** `.story` container → `.progress` bar + `.ctrl` controls + `.nav-arrows` + multiple `.s` slides stacked via absolute positioning. Only the `.on` slide is visible.

**Color variants:** Alternate across slides for visual rhythm:
| Class | Background | Use |
|-------|-----------|-----|
| `s--ink` | Dark navy | Default, intro/outro |
| `s--cream` | Light cream | High-contrast content |
| `s--amber` | Golden gradient | Highlight slides |
| `s--deep` | Deep blue | Technical/equation slides |
| `s--teal` | Teal/cyan | Secondary accent |

**Slide-specific palette:** Darker than main theme — `--ink: #080d14`, `--amber: #d4a24a`, `--cream: #f0ece4`, `--teal: #3a7d7e`

**Fonts (slides only):** Instrument Serif (display), DM Sans (body), Space Mono (mono). Arabic swaps to Noto Sans Arabic.

**Content components:** `.s-card`, `.s-stats` + `.s-stat`, `.s-list`, `.s-equation`, `.s-timeline`, `.wave-canvas`, `.gen-bars`

**Audio sync:** `data-audio` attribute → MP3 path. Progress bar fill animates over `audio.duration`. Auto-advances on `ended` (400ms delay). Muted mode: 8s auto-advance.

**Keyboard:** `ArrowRight`/`Space` = next, `ArrowLeft` = prev, `M` = mute toggle.

**Responsive:** Full viewport on mobile, phone-like frame (max 500px, 24px radius, shadow) on desktop.

See `ref/story-slides.md` for full implementation reference (HTML structure, CSS classes, JS patterns, component catalog, animations, RTL handling).

## Building New Lessons

1. Copy structure from `courses/wrl101/lessons/m1-l1.html`
2. Update breadcrumb, title, meta, and content
3. Add KaTeX equations using the pattern above
4. Create transcript JSON in `transcripts/{lang}/{course}/`
5. Create Arabic version in `ar/courses/{id}/lessons/`
6. Add `fade-up` classes to content blocks for entrance animations
7. Include lesson-nav at bottom (prev/overview/next)

## Building New Courses

1. Create `courses/{id}/index.html` from `courses/wrl101/index.html`
2. Create `ar/courses/{id}/index.html` for Arabic
3. Add course card to both landing pages (`index.html` and `ar/index.html`)
4. Follow the module structure in `course-structure.md`
5. Use `.coming-soon` badge for unpublished courses

## Common JS Patterns
Every page includes:
- **Navbar scroll effect:** `window.addEventListener('scroll', ...)` → `.scrolled` class
- **Mobile menu:** hamburger toggle → `.active` / `.open` classes
- **Fade-up observer:** `IntersectionObserver` at `threshold: 0.1`
- **KaTeX render:** retry loop until katex global is available

## Don'ts
- Don't introduce build tools, bundlers, or frameworks
- Don't use Tailwind or CSS-in-JS — use the design system in `theme.css`
- Don't duplicate assets between EN/AR — only text content differs
- Don't hardcode colors — use CSS custom properties
- Don't skip the grain overlay or entrance animations
- Don't use `margin-left`/`margin-right` in shared CSS when `margin-inline` works
