#!/usr/bin/env bash
# Copy site to docs/ for GitHub Pages (Option B)
set -euo pipefail

mkdir -p docs
cp index.html docs/
rsync -a --delete static/ docs/static/

echo "Site copied to docs/ - you can now enable GitHub Pages to serve from the docs/ folder."