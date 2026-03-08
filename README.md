# Wireless 101

An interactive, bilingual (English/Arabic) educational platform that makes wireless communications, signal processing, and the math behind them accessible to everyone — for free.

## What Is This?

Wireless 101 breaks down complex engineering topics into visual, story-driven lessons. Each lesson is available as a long-form article and as interactive story slides with text-to-speech narration. The entire site is static HTML — no frameworks, no accounts, no paywalls.

## Courses

| Course | Description |
|--------|-------------|
| **Wireless Communications 101** | How signals travel, modulation, antennas, channel effects |
| **Digital Signal Processing 101** | Sampling, filtering, Fourier transforms, spectral analysis |
| **Statistics 101** | Probability, distributions, estimation — the math wireless relies on |
| **Machine Learning 101** | Core ML concepts with a signal processing lens |
| **Linear Algebra 101** | Vectors, matrices, transforms — the language of engineering |

## Key Features

- **Bilingual** — Full English and Arabic (RTL) versions
- **Two formats per lesson** — Article view + interactive story slides
- **Text-to-speech** — AI-generated narration for every lesson
- **Beautiful math** — Rendered with KaTeX
- **100% free & open** — No sign-ups, no tracking, no ads
- **Mobile-friendly** — Responsive design, works on any device

## Tech Stack

Pure static site — no build tools, no frameworks.

- HTML5 / CSS3 / Vanilla JS
- [KaTeX](https://katex.org/) for math rendering
- [ElevenLabs](https://elevenlabs.io/) for TTS audio generation
- [GoatCounter](https://www.goatcounter.com/) for privacy-friendly analytics

## Project Structure

```
index.html                  # English landing page
ar/index.html               # Arabic landing page (RTL)
courses/{id}/               # Course overview pages
courses/{id}/lessons/       # Lesson articles & story slides
ar/courses/{id}/            # Arabic mirrors
transcripts/                # TTS transcript JSON files
audio/                      # Generated audio files
theme.css                   # Shared design system
theme-rtl.css               # RTL overrides
```

## About the Creator

Built by **Hisham Abuella** — Cellular Systems Engineer specializing in RF digital systems, 5G baseband technologies, signal processing, and machine learning. From Cairo to California, combining deep wireless engineering expertise with a passion for making technical education accessible.

## Connect

- [GitHub](https://github.com/hisham-abuella)
- [LinkedIn](https://www.linkedin.com/in/hisham-abuella-808b91171/)
- [Instagram](https://www.instagram.com/hisham.abuella)
- [Email](mailto:hisham.abuella1@gmail.com)

## License

This project is an educational resource. Content is free to read and share.
