# Internationalization Plan: English + Arabic

## Overview
Support full English (LTR) and Arabic (RTL) across the entire platform.

## Approach: File-based i18n with shared assets

### Folder Structure
```
Wireless_101/
  i18n/
    en.json          # English UI strings
    ar.json          # Arabic UI strings
  theme.css          # Shared (direction-agnostic)
  theme-rtl.css      # RTL overrides (loaded for Arabic)
  index.html         # Landing page (en, default)
  ar/
    index.html       # Landing page (ar)
  courses/
    wrl101/
      index.html                 # Course page (en)
      modules/
        module-01/
          transcripts/
            en.txt               # English transcript
            ar.txt               # Arabic transcript
    dsp101/
      ...same structure...
  ar/courses/
    wrl101/
      index.html                 # Course page (ar)
    dsp101/
      index.html
```

## Implementation Steps

### 1. UI String Extraction (`i18n/en.json` + `i18n/ar.json`)
Extract all visible text into JSON files:
```json
// en.json
{
  "nav.home": "Home",
  "nav.courses": "Courses",
  "nav.howItWorks": "How It Works",
  "nav.reviews": "Reviews",
  "nav.getStarted": "Get Started",
  "hero.title": "Learn Wireless & {accent}Signal Processing{/accent} from Scratch",
  "hero.desc": "Interactive courses that break down complex...",
  ...
}

// ar.json
{
  "nav.home": "الرئيسية",
  "nav.courses": "الدورات",
  "nav.howItWorks": "كيف يعمل",
  "nav.reviews": "التقييمات",
  "nav.getStarted": "ابدأ الآن",
  "hero.title": "تعلم الاتصالات اللاسلكية و{accent}معالجة الإشارات{/accent} من الصفر",
  ...
}
```

### 2. RTL Stylesheet (`theme-rtl.css`)
Overrides for Arabic layout:
- `html[dir="rtl"]` selector prefix
- Flip margins/paddings (margin-left -> margin-right)
- Mirror flex/grid directions where needed
- Flip border-radius corners, transforms
- Arabic font stack: `'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif`

Key overrides:
```css
html[dir="rtl"] body {
  font-family: 'IBM Plex Sans Arabic', 'DM Sans', sans-serif;
}

html[dir="rtl"] .nav-links { direction: rtl; }
html[dir="rtl"] .hero { direction: rtl; }
html[dir="rtl"] .breadcrumb { direction: rtl; }
/* ... etc */
```

### 3. Transcript Files
Each module's `transcripts/` folder holds per-language plain text or markdown:
```
module-01/transcripts/
  en.txt    # "Welcome to Module 1. In this lesson we'll explore..."
  ar.txt    # "مرحبا بكم في الوحدة الأولى. في هذا الدرس سنستكشف..."
```

These feed into:
- Audio narration generation (TTS)
- Subtitle/caption display in the lesson player
- Screen reader accessibility

### 4. Language Switcher
Add to navbar:
```html
<div class="lang-switch">
  <a href="/index.html" class="active">EN</a>
  <a href="/ar/index.html">عربي</a>
</div>
```

### 5. HTML Attributes
English pages:
```html
<html lang="en" dir="ltr">
```

Arabic pages:
```html
<html lang="ar" dir="rtl">
```

### 6. Shared Assets (no duplication)
These remain shared across languages:
- `theme.css` (base styles)
- `logo.png` / `logo.svg`
- Lab/interactive components (JS)
- Images, diagrams, animations

Only text content and RTL overrides differ.

## Priority Order
1. **Phase 1**: Extract UI strings into JSON, create `theme-rtl.css`
2. **Phase 2**: Create Arabic landing page (`ar/index.html`)
3. **Phase 3**: Create Arabic course pages
4. **Phase 4**: Write Arabic transcripts for each module
5. **Phase 5**: Add language switcher to all pages

## Font Loading
```html
<!-- English -->
<link href="...DM+Sans..." rel="stylesheet">
<!-- Arabic (only on ar pages) -->
<link href="...IBM+Plex+Sans+Arabic..." rel="stylesheet">
```

## Technical Notes
- No JS framework needed; static HTML per language keeps it simple
- Shared `theme.css` uses logical properties where possible (`margin-inline-start` vs `margin-left`) to reduce RTL overrides
- Transcripts use plain `.txt` for easy editing; can upgrade to `.md` if formatting needed
- All SVG icons are direction-neutral (no mirroring needed)
