# KaTeX Equation Reference

## Setup (every lesson page)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
```

## HTML Structure
```html
<div class="equation-block fade-up">
  <div class="equation-block-label">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
    </svg>
    FARADAY'S LAW
  </div>
  <div id="eq-faraday" class="equation-render"></div>
  <div class="equation-block-caption">A changing magnetic field induces an electric field</div>
</div>
```

## Styling (inline in lesson pages)
```css
.equation-block {
  background: linear-gradient(135deg, #f8f6f1, #f0ece4);
  border-left: 3px solid var(--amber);
  border-radius: 0 var(--r-md) var(--r-md) 0;
  padding: 1.5rem 1.75rem;
  margin: 1.5rem 0;
  position: relative;
}

.equation-block-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--amber);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.equation-block-caption {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.75rem;
  font-style: italic;
}
```

## JavaScript Rendering Pattern
```js
function renderEquations() {
  if (typeof katex === 'undefined') { setTimeout(renderEquations, 200); return; }
  var eqs = [
    ['eq-id', 'LaTeX string here']
  ];
  eqs.forEach(function(pair) {
    var el = document.getElementById(pair[0]);
    if (el) katex.render(pair[1], el, { displayMode: true, throwOnError: false });
  });
}
renderEquations();
```

## Common Equations by Course

### WRL-101 Examples
```
Maxwell/Faraday: \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}
Ampère-Maxwell: \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} + \\mu_0 \\epsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}
Speed of light: c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8 \\;\\text{m/s}
Wavelength:     c = f \\cdot \\lambda \\qquad \\Rightarrow \\qquad \\lambda = \\frac{c}{f}
```

### Upcoming (DSP-101, STAT-101, etc.)
```
Sine wave:      x(t) = A \\sin(2\\pi f t + \\phi)
AM signal:      s(t) = [1 + m \\cdot x(t)] \\cos(2\\pi f_c t)
FM signal:      s(t) = A \\cos\\left(2\\pi f_c t + 2\\pi k_f \\int x(\\tau) d\\tau\\right)
Shannon:        C = B \\log_2(1 + \\text{SNR})
Nyquist:        f_s \\geq 2 f_{\\max}
DFT:            X[k] = \\sum_{n=0}^{N-1} x[n] \\, e^{-j2\\pi kn/N}
Path loss:      L = 20\\log_{10}\\left(\\frac{4\\pi d f}{c}\\right)
```

## Slide Format Equations
In story slides, equations render into `.s-equation` containers:
```css
.s-equation .katex { font-size: 1.3em; }
```
Render directly by element reference instead of ID array.

## Notes
- Always use `displayMode: true` for block equations
- `throwOnError: false` prevents broken pages on typos
- Equations are NOT translated for Arabic — math is universal
- Equation labels and captions ARE translated
- Use `\\text{}` for units within equations (e.g., `\\text{m/s}`)
- Use `\\quad` or `\\qquad` for spacing between related expressions
