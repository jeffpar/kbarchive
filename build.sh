#!/usr/bin/env bash
JEKYLL_ENV=production bundle exec jekyll build
echo .nojekyll>docs/.nojekyll
