# Wireless 101 — Design Fixes Checklist

## Priority 1: High Impact, Easy Fixes

- [x] **Fix `--text-tertiary` contrast** — `#8b92a5` → `#717a8e` (~4.6:1). Location: `theme.css`
- [x] **Fix `--text-on-dark-muted` contrast** — `rgba(255,255,255,0.55)` → `0.65`. Location: `theme.css`
- [x] **Fix Arabic course tag styling mismatch** — Matched EN mono font, size, text-transform. Location: `ar/courses/wrl101/index.html`
- [x] **Fix course code label contrast** — `opacity: 0.6` → `color: rgba(255,255,255,0.7)`. Location: `index.html` + `ar/index.html`
- [x] **Add `:focus-visible` styles** — Amber outline on buttons/links. Location: `theme.css`

## Priority 2: Consistency

- [x] **Extract inline course header colors to CSS classes** — `.course-header.green/.purple/.blue`. Location: `index.html` + `ar/index.html`
- [x] **Extract inline course topic dot colors** — `.green-dot`, `.purple-dot`, `.blue-dot`. Location: `index.html` + `ar/index.html`
- [x] **Extract vision icon backgrounds** — `.vision-icon.bg-amber/.bg-green/.bg-purple/.bg-blue/.bg-ink`. Location: `index.html` + `ar/index.html`
- [ ] **Extract shared landing page CSS** — Arabic `ar/index.html` duplicates ~250 lines of CSS. Create `landing.css` shared by both. Location: both landing pages
- [x] **Add missing RTL override for lesson timeline** — Added to `theme-rtl.css`
- [x] **Add RTL override for `.origin-quote`** — Added to `theme-rtl.css`
- [x] **Fix Arabic module body padding on mobile** — Fixed in `theme-rtl.css`

## Priority 3: Polish

- [x] **Replace `margin-left/right` with `margin-inline`** — CTA box paragraph. Location: `index.html`
- [x] **Replace `text-align: left` with `text-align: start`** — Mobile steps grid. Location: `index.html`
- [x] **Fix equation block fallback color** — `#d4a24a` → `var(--amber)`. Location: EN + AR lesson pages
- [x] **Fix hardcoded gradient in equation blocks** — → `var(--surface)` / `var(--paper)`. Location: EN + AR lesson pages
- [x] **Fix KaTeX text color** — `#1a1a1a` → `var(--text)`. Location: EN + AR lesson pages
- [x] **Remove dead CSS** — `.hero-social-proof` / `.hero-avatars` removed from `theme-rtl.css`

## Priority 4: Accessibility

- [ ] **Add `lang="en"` to English text in Arabic pages** — Course codes like "WRL-101" need `<span lang="en">` for screen readers
- [x] **Add skip-to-content link** — Added to EN + AR landing pages
- [x] **Add `aria-hidden="true"` to decorative SVGs** — Added to vision card icons (EN + AR)

## Additional

- [x] **Make logo bigger** — Navbar: 34px → 44px, Footer: 28px → 36px. Location: `theme.css`
