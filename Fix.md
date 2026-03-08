# Wireless 101 — Design Fixes Checklist

## Priority 1: High Impact, Easy Fixes

- [ ] **Fix `--text-tertiary` contrast** — `#8b92a5` on cream is 3.4:1 ratio, fails WCAG AA. Darken to `#717a8e` (~4.6:1). Location: `theme.css:28`
- [ ] **Fix `--text-on-dark-muted` contrast** — `rgba(255,255,255,0.55)` on `--ink` is ~4.3:1. Bump to `rgba(255,255,255,0.65)` for ~5.5:1. Location: `theme.css:30`
- [ ] **Fix Arabic course tag styling mismatch** — AR uses `var(--font-body)` instead of `var(--font-mono)`, wrong size (0.7rem vs 0.65rem), missing `text-transform: uppercase` and `letter-spacing`. Location: `ar/courses/wrl101/index.html`
- [ ] **Fix course code label contrast** — `opacity: 0.6` on dark headers reduces contrast too much. Use explicit color instead. Location: `index.html:428` `.course-code`
- [ ] **Add `:focus-visible` styles** — No keyboard focus indicators on buttons/links. Add `outline: 2px solid var(--amber); outline-offset: 2px`. Location: `theme.css`

## Priority 2: Consistency

- [ ] **Extract inline course header colors to CSS classes** — STAT-101 (green), ML-101 (purple), LA-101 (blue) use inline `style=""` for gradients. Define `.course-header.green`, `.course-header.purple`, `.course-header.blue`. Location: `index.html:981,1021,1060` + `ar/index.html`
- [ ] **Extract inline course topic dot colors** — Same 3 courses hardcode dot colors via `style=""`. Define `.green-dot`, `.purple-dot`, `.blue-dot` classes. Location: `index.html` + `ar/index.html`
- [ ] **Extract vision icon backgrounds** — 6 vision cards use inline `rgba()` backgrounds. Create utility classes. Location: `index.html:1151-1186` + `ar/index.html`
- [ ] **Extract shared landing page CSS** — Arabic `ar/index.html` duplicates ~250 lines of CSS. Create `landing.css` shared by both. Location: both landing pages
- [ ] **Add missing RTL override for lesson timeline** — `padding-left: 2rem` should flip to `padding-right` in Arabic. Location: `theme-rtl.css`
- [ ] **Add RTL override for `.origin-quote`** — Border side and padding currently handled per-page instead of globally. Location: `theme-rtl.css`
- [ ] **Fix Arabic module body padding on mobile** — Missing vertical padding values in RTL mobile override. Location: `theme-rtl.css:232`

## Priority 3: Polish

- [ ] **Replace `margin-left/right` with `margin-inline`** — CTA box paragraph uses directional margins. Location: `theme.css:764`
- [ ] **Replace `text-align: left` with `text-align: start`** — Mobile steps grid hardcodes LTR alignment. Location: `index.html:797,805`
- [ ] **Fix equation block fallback color** — `#d4a24a` differs from theme `#e8a838`. Use `var(--amber)`. Location: lesson pages
- [ ] **Fix hardcoded gradient in equation blocks** — `#f8f6f1`, `#f0ece4` not using tokens. Location: lesson pages
- [ ] **Fix KaTeX text color** — `#1a1a1a` hardcoded in `.katex`. Use `var(--text)`. Location: lesson pages
- [ ] **Remove dead CSS** — `.hero-social-proof` and `.hero-avatars` rules in `theme-rtl.css:54-70` target non-existent elements. Location: `theme-rtl.css`

## Priority 4: Accessibility

- [ ] **Add `lang="en"` to English text in Arabic pages** — Course codes like "WRL-101" need `<span lang="en">` for screen readers. Location: all Arabic pages
- [ ] **Add skip-to-content link** — `<a href="#main" class="skip-link">Skip to content</a>`. Location: all pages
- [ ] **Add `aria-hidden="true"` to decorative SVGs** — Icons in course cards, vision cards, etc. Location: all pages
