#!/usr/bin/env bash
#
# Use this script to (re)build the /docs folder
#
JEKYLL_ENV=production bundle exec jekyll build
echo .nojekyll>docs/.nojekyll
