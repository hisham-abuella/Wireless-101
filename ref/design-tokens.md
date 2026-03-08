# Design Tokens Reference

## Colors
```css
/* Core palette */
--ink: #0f1b2d           /* Primary dark navy */
--ink-light: #1a2d4a     /* Lighter navy (hover states) */
--ink-muted: #2a3f5f     /* Muted navy */
--amber: #e8a838         /* Primary accent gold */
--amber-hot: #f5b731     /* Bright amber (hover) */
--amber-pale: rgba(232, 168, 56, 0.1)   /* Light amber bg */
--amber-glow: rgba(232, 168, 56, 0.06)  /* Subtle amber */
--cream: #faf8f4         /* Page background */
--paper: #f4f1eb         /* Footer/secondary bg */
--white: #ffffff
--sage: #7c9a8e          /* Teal secondary accent */
--sage-pale: rgba(124, 154, 142, 0.1)

/* Text */
--text: #1a1a1a          /* Primary body text */
--text-secondary: #52596b /* Secondary text */
--text-tertiary: #8b92a5  /* Muted labels */
--text-on-dark: #e8e6e1   /* Text on dark backgrounds */
--text-on-dark-muted: rgba(255,255,255,0.55)

/* Borders & surfaces */
--border: #e2dfd8
--border-light: #ece9e2
--surface: #f7f5f0
```

## Shadows
```css
--shadow-xs: 0 1px 2px rgba(15, 27, 45, 0.04)
--shadow-sm: 0 2px 8px rgba(15, 27, 45, 0.06)
--shadow-md: 0 4px 20px rgba(15, 27, 45, 0.08)
--shadow-lg: 0 8px 40px rgba(15, 27, 45, 0.1)
--shadow-xl: 0 16px 64px rgba(15, 27, 45, 0.12)
```

## Border Radii
```css
--r-sm: 8px    /* Small elements, badges */
--r-md: 12px   /* Cards, callouts */
--r-lg: 16px   /* Large cards, takeaway boxes */
--r-xl: 24px   /* Hero elements */
/* Buttons: border-radius: 100px (pill shape) */
```

## Typography Scale
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero h1 | Display | clamp(2rem, 5vw, 3.75rem) | 800 |
| Section title | Display | clamp(1.875rem, 4vw, 2.75rem) | 700 |
| Lesson h1 | Display | clamp(1.75rem, 4vw, 2.5rem) | 700 |
| Article h2 | Display | 1.5rem | 700 |
| Body text | Body | 1rem | 400 |
| Section label | Mono | 0.7rem | 500, uppercase, 0.2em spacing |
| Badge | Mono | 0.65rem | 500, uppercase |
| Nav links | Body | 0.875rem | 500 |

## Spacing
- Container max-width: `1120px` (some pages use `1200px`)
- Section padding: `6rem 2rem` (desktop), `4rem 1.5rem` (mobile)
- Card padding: `1.75rem` typical
- Content max-width: `720px` for article text

## Badge Variants
```css
.badge-navy  { background: rgba(15, 27, 45, 0.08); color: var(--ink); }
.badge-amber { background: var(--amber-pale); color: #996a10; }
.badge-green { background: rgba(16, 185, 129, 0.08); color: #047857; }
```

## Button Variants
| Class | Background | Text | Hover Effect |
|-------|-----------|------|-------------|
| `.btn-primary` | ink | cream | lift -2px, shadow |
| `.btn-secondary` | transparent + border | ink | border darkens |
| `.btn-amber` | amber | ink | lift -2px, amber shadow |
| `.btn-sm` | — | — | Smaller padding modifier |
