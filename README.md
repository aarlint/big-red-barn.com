# Big Red Barn Website

This repository contains the Big Red Barn website built with Vite and React.

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### How It Works

1. The GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered when:
   - Changes are pushed to the `main` branch
   - The workflow is manually triggered from the Actions tab

2. The workflow:
   - Builds the React application
   - Copies the CNAME file for custom domain configuration
   - Deploys the built files to GitHub Pages

### Setting Up GitHub Pages

To set up GitHub Pages for this repository:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select:
   - Source: "GitHub Actions"
4. Your site will be deployed automatically when the workflow runs

### Custom Domain

This repository includes a CNAME file for custom domain configuration. If you want to use a different domain:

1. Update the CNAME file with your domain
2. Configure your domain's DNS settings to point to GitHub Pages

## Cleaning Up Unnecessary Files

This repository includes a cleanup script to remove unnecessary files from the base directory:

```bash
# Make the script executable
chmod +x cleanup.sh

# Run the cleanup script
./cleanup.sh
```

This will remove:
- Old HTML files (index.html, history.html)
- CSS files (bootstrap.min.css)
- Duplicate asset directories (icons/, images/)

## Local Development

To run the project locally:

```bash
# Navigate to the project directory
cd big-red-barn-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Building Locally

To build the project locally:

```bash
# Navigate to the project directory
cd big-red-barn-react

# Build the project
npm run build

# Preview the build
npm run preview