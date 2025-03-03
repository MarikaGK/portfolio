#!/bin/bash

# Budowanie projektu
pnpm build

# Dodawanie pliku .nojekyll
touch dist/.nojekyll

# Kopiowanie pliku 404.html dla GitHub Pages
cp dist/index.html dist/404.html

# Wykonanie deploymentu
npx gh-pages -d dist 