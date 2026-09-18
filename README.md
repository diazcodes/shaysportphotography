# Beyond the Game (BTG Sports Video Productions)

A multi-page marketing website for **Beyond the Game**, a youth sports photography and highlight-video business run by T&D Sports Video Productions. The site is designed to give young athletes the kind of professional-quality photo and video presence usually reserved for college and pro players.

## Live Pages

- **`index.html`** — Homepage: hero image, tagline, animated photo filmstrip of featured sports (track, basketball, football, team shots), a "Why Choose Us" feature section, and a contact form for booking inquiries.
- **`about.html`** — About page introducing Shay, the photographer/videographer behind the brand, with a bio, pull quote, and list of sports/services covered.

## Project Structure
├── index.html # Homepage
├── about.html # About page
├── styles.css # All site styling
├── script.js # Interactivity (nav menu, scroll effects, reveal animations)
└── assets/
├── logo.png / logo-white.png
├── hero-football.jpg
├── about-portrait.jpg
├── camera-hands-cutout.png
├── cta-sunset.jpg
├── strip-track-start.jpg
├── strip-basketball.jpg
├── strip-football-action.jpg
├── strip-team.jpg
└── track-sunset.jpg

## Features

- **Responsive fullscreen nav overlay** with keyboard accessibility (focus trapping, Escape to close)
- **Scroll-triggered reveal animations** using `IntersectionObserver`, with staggered delays for grouped elements and full support for `prefers-reduced-motion`
- **Auto-scrolling photo filmstrip** showcasing featured sports (track, basketball, football, team)
- **Sticky header** that changes style on scroll
- **Contact form** (via Formspree) for booking and recruiting-video inquiries
- **SEO-friendly meta tags** and descriptive alt text throughout for accessibility

## Setup

1. Open `index.html` in a browser — no build step required, the site is plain HTML/CSS/JS.
2. To enable the contact form, sign up for a free form backend at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in the `<form action="...">` attribute in `index.html`.
3. All image assets should live in an `/assets` folder alongside the HTML files (referenced as `assets/filename.jpg`).

## Tech Stack

- Semantic HTML5
- CSS (custom properties, no framework)
- Vanilla JavaScript (no dependencies)
- Google Fonts: Anton, Oswald, Barlow Condensed, Barlow

## Contact

- Instagram: [@shay_beyondthegame](https://instagram.com/shay_beyondthegame)
- TikTok: [@shayoncam_beyondthegam](https://tiktok.com/@shayoncam_beyondthegam)
- Email: hello@beyondthegamevideo.com
