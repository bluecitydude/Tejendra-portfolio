Tejendra Personal Portfolio — Testing folder

Quick preview

1. Using XAMPP (recommended):
   - Place the `Testing` folder into the webserver root (already in `htdocs`).
   - Open http://localhost/Tejendra_personal_portfolio%20-%20Copy/Testing/index.html

2. Using Python static server (quick):
```powershell
cd "d:\xampp\htdocs\Tejendra_personal_portfolio - Copy\Testing"
python -m http.server 8000
# then open http://localhost:8000
```

What I changed (high level)
- Replaced multiple older CSS files with a consolidated `assets/css/style.css` and kept `assets/css/custom.css` for overrides.
- Reworked the navbar to a responsive Bootstrap navbar and added mobile collapse behavior.
- Converted the hero and project areas to responsive Bootstrap layouts and card components.
- Added `loading="lazy"` to images for better page performance.
- Standardized AOS animation initialization across pages: `{ once: true, duration: 700, easing: 'ease-out-cubic' }`.
- Removed legacy CSS files (`style1.css`, `style2.css`, `style3.css`).
- Added small UX improvements: button styles, focus outlines.

Recommended next steps
- Preview the site locally and report any visual adjustments you want (spacing, colors, or typography).
- Optimize images (resize and convert to WebP) for faster load times. Example using ImageMagick:
```powershell
# install ImageMagick separately then run per image
magick convert assets/projects/counter/counter.png -resize 800x assets/projects/counter/counter.webp
```
- Optionally run a lightweight image optimizer like `cwebp` for better compression.

If you want, I can:
- Optimize images automatically (I can add a Node script using `sharp`, but it requires installing dependencies), or
- Continue polishing spacing and contrast across pages now.

Notes
- I left vendor files (`bootstrap.min.css`, `all.min.css`) and `custom.css` in place.
- If you'd like the old CSS files restored, I kept local history but removed them from the live folder; let me know and I'll restore copies.

