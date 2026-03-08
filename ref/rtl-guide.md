# RTL / Arabic Page Checklist

## Page Setup
```html
<html lang="ar" dir="rtl">
<head>
  <link rel="stylesheet" href="../../../theme.css">
  <link rel="stylesheet" href="../../../theme-rtl.css"> <!-- MUST be after theme.css -->
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
```

## Font Mapping
`theme-rtl.css` overrides CSS variables:
```css
html[dir="rtl"] {
  --font-display: 'Noto Kufi Arabic', 'Bricolage Grotesque', serif;
  --font-body: 'IBM Plex Sans Arabic', 'Libre Franklin', sans-serif;
}
```

## Key RTL Reversals
All overrides use `html[dir="rtl"]` prefix:
- **Flex rows:** `flex-direction: row-reverse` on nav-links, hero-buttons, breadcrumb, course-meta, module-header, footer-brand-name
- **Arrow SVGs:** `transform: scaleX(-1)` to flip directional arrows
- **Avatar stacks:** `margin-left: 0; margin-right: -10px`
- **Module body padding:** swap left/right padding
- **Testimonial quotes:** reposition `::before` pseudo-element

## Language Switcher
```html
<div class="lang-switch">
  <a href="/ar/courses/wrl101/index.html" class="active">عربي</a>
  <a href="/courses/wrl101/index.html">EN</a>
</div>
```
- On Arabic pages: `عربي` has `.active` class
- On English pages: `EN` has `.active` class
- Links point to the equivalent page in the other language

## Content Translation Notes
- Translate ALL visible text — titles, descriptions, labels, meta, alt text
- Keep course IDs unchanged (WRL-101, DSP-101, etc.)
- Keep technical terms in parentheses when helpful: `التردد (Frequency)`
- KaTeX equations stay in Latin/math — do NOT translate equation content
- Equation labels and captions should be translated
- Maintain the same `id` attributes for KaTeX render targets

## Transcript Format
```json
{
  "course": "WRL-101",
  "module": 1,
  "lesson": 1,
  "title": "نبذة تاريخية عن الاتصالات اللاسلكية",
  "language": "ar",
  "slides": [
    { "id": "s1-intro", "title": "مقدمة", "transcript": "..." }
  ]
}
```
- Same `id` values as English version
- Full cultural adaptation, not word-for-word translation

## Mobile RTL (≤768px / ≤900px)
- Hero text centers on mobile for both LTR/RTL
- Step items: grid flips icon to right side
- Module body: equal padding on both sides
