#!/bin/bash

# Cleanup script to remove unnecessary files from the base directory
# This script will remove old HTML, CSS files, and duplicate asset directories

echo "Cleaning up unnecessary files from the base directory..."

# Remove old HTML and CSS files
rm -f bootstrap.min.css
rm -f history.html
rm -f index.html
rm -f .DS_Store

# Remove duplicate asset directories (since they're now in big-red-barn-react/public)
rm -rf icons
rm -rf images

echo "Cleanup complete! The following files were kept:"
echo "- CNAME (for custom domain)"
echo "- README.md (documentation)"
echo "- .github/workflows/deploy.yml (deployment workflow)"
echo "- big-red-barn-react/ (React application)"

echo "You can now commit these changes to your repository."