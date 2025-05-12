# WeWantWaste Skip Hire Application

![WeWantWaste Banner](https://i2.wp.com/www.bioenergyconsult.com/wp-content/uploads/2021/05/skip-bin-scaled.jpg?ssl=1&w=800)

## Overview
This is a modern web application for WeWantWaste skip hire services, built with React, TypeScript, Vite, and Tailwind CSS. The application allows users to browse and select skip sizes for waste disposal services.

## Features
- Responsive design that works on mobile and desktop
- Dark/light mode toggle
- Skip size filtering options (road placement, heavy waste)
- Interactive UI with animations using Framer Motion
- API integration with the WeWantWaste backend

## Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

## Installation
## Live Demo

[View Live Demo](https://codesandbox.io/p/github/beastrog/skippage) - *Link will be updated once CodeSandbox is set up*

## Technologies Used

This project is built with modern web technologies:

- **React 18**: For building the user interface
- **TypeScript**: For type-safe code
- **Vite**: For fast development and optimized builds
- **Tailwind CSS**: For responsive, utility-first styling
- **Shadcn UI**: For beautiful, accessible UI components
- **Framer Motion**: For smooth animations and transitions
- **React Query**: For efficient data fetching and caching
- **React Router**: For navigation and routing

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

### Installation

```bash
# Clone the repository
git clone https://github.com/beastrog/skippage.git

# Navigate to the project directory
cd skippage

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Project Structure

```
src/
├── components/     # UI components
│   ├── SkipCard.tsx           # Individual skip card component
│   ├── SkipSelectionPage.tsx  # Main skip selection page
│   └── ui/                    # Shadcn UI components
├── pages/          # Application pages
│   ├── Index.tsx              # Main page with skip selection
│   └── NotFound.tsx           # 404 page
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── App.tsx         # Main application component
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## Deployment

To build this project for production:

```bash
# Build the project
npm run build

# The build output will be in the 'dist' directory
```

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the build settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

Vercel will automatically detect the configuration from the `vercel.json` file.

### Deploying to CodeSandbox

1. Create a new sandbox from GitHub
2. Import your repository
3. CodeSandbox will automatically detect the Vite configuration
4. If you encounter any issues:
   - Make sure all dependencies are installed
   - Check that the sandbox environment has access to the API endpoint
   - Verify that the build command is set to `npm run build`

### Troubleshooting Deployment Issues

1. **API Connection Errors**
   - Check your internet connection
   - Verify that the API endpoint is correct and accessible
   - The application includes retry logic for API failures

2. **Build Failures**
   - Make sure all dependencies are installed: `npm install`
   - Clear the cache: `npm cache clean --force`
   - Remove node_modules and reinstall: `rm -rf node_modules && npm install`

3. **Deployment Issues**
   - Ensure the build command and output directory are correctly set
   - Check that the Vercel configuration in `vercel.json` is correct
   - For CodeSandbox, make sure the sandbox has access to all required dependencies


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Deyan - [GitHub Profile](https://github.com/beastrog)
