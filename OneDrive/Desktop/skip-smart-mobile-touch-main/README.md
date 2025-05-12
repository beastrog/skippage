# SkipSmart Mobile Touch

![SkipSmart Banner](https://i2.wp.com/www.bioenergyconsult.com/wp-content/uploads/2021/05/skip-bin-scaled.jpg?ssl=1&w=800)

## Project Overview

SkipSmart Mobile Touch is a modern, responsive web application for a skip (dumpster) rental service that allows users to select and book skips of various sizes for waste disposal. The application provides an intuitive interface with smooth animations for browsing and selecting skips based on size, features, and price.

## Features

- **Interactive Skip Selection**: Browse and select from various skip sizes with detailed information
- **Filtering Options**: Filter skips by features like road placement and heavy waste capacity
- **Responsive Design**: Fully responsive interface that works on mobile, tablet, and desktop devices
- **Animated UI**: Smooth animations and transitions for an engaging user experience
- **Dark Mode Support**: Full support for both light and dark themes
- **Real-time Feedback**: Toast notifications provide immediate feedback on user actions

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

- Node.js (v16 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/beastrog/skippage.git

# Navigate to the project directory
cd skippage

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
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

To deploy this project to production:

```bash
# Build the project
npm run build

# The build output will be in the 'dist' directory
# Deploy this directory to your hosting provider
```

You can deploy to platforms like Netlify, Vercel, or GitHub Pages.


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Deyan - [GitHub Profile](https://github.com/beastrog)
