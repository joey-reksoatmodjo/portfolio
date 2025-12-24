# joeys-career-website

A career website for Joey

## Static site migration (converted from Flask)

This repository has been converted from a Flask app to a static site (HTML/CSS/JS).

Preview locally:

1. From the project root run:

   ```bash
   python -m http.server 8000
   ```

2. Open http://localhost:8000/index.html in your browser.

Publish to GitHub Pages:

- Option A (serve from `main` root): In the repository settings, enable GitHub Pages to serve from the `main` branch and the `/ (root)` folder.
- Option B (serve from `docs/`): Move `index.html` and the `static/` folder into a `docs/` folder and enable Pages to serve from the `docs` folder (recommended if you want the repo root to remain source-only).

Notes:

- The dynamic data previously in `config.py` is now in `static/js/data.js` and rendered client-side by `static/js/render.js`.
- `app.py` is no longer required to serve the site; you may remove it or keep it for reference.

Quick prepare `docs/` for Pages:

```bash
./scripts/make_docs.sh
# then push the `docs/` directory to GitHub and enable Pages from `docs/` in the repo settings
```
