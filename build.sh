#!/bin/bash

# Exit on error
set -e

echo "🏗️ Building Big Red Barn React app..."

# Navigate to React app directory
cd big-red-barn-react

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Build the React app
echo "🔨 Building the app..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
  echo "❌ Build failed! The dist directory was not created."
  exit 1
fi

# Navigate back to root
cd ..

# Remove old files from root (except for specific directories/files)
echo "🧹 Cleaning up root directory..."
find . -maxdepth 1 -type f -not -name "README.md" -not -name "CNAME" -not -name "build.sh" -not -name ".gitignore"  -not -name ".nojekyll" -delete
find . -maxdepth 1 -type d -not -path "./big-red-barn-react" -not -path "." -not -path "./.git" -not -path "./.github" -exec rm -rf {} \;

# Copy build files to root (includes processed public files)
echo "📋 Copying build files to root..."
cp -r big-red-barn-react/dist/* .

# Verify that assets from public directory were copied
echo "🔍 Verifying public assets..."
if [ -d "big-red-barn-react/public" ] && [ "$(ls -A big-red-barn-react/public)" ]; then
  # Check if at least one public directory exists in root
  PUBLIC_DIRS=("icons" "images")
  FOUND=false
  
  for DIR in "${PUBLIC_DIRS[@]}"; do
    if [ -d "$DIR" ]; then
      FOUND=true
      break
    fi
  done
  
  if [ "$FOUND" = false ]; then
    echo "⚠️ Warning: Public assets may not have been copied correctly."
    echo "Manually copying public directory contents..."
    cp -r big-red-barn-react/public/* .
  else
    echo "✓ Public assets verified."
  fi
fi

echo "✅ Build complete! Files are ready for GitHub Pages."