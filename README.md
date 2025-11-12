
  # Emīls Ronis - Portfolio Website

  A modern, dark-themed portfolio website showcasing my work and skills as a Full Stack Developer.

  ## Getting Started

  ### Prerequisites

  - Node.js (v18 or higher)
  - npm or yarn

  ### Installation

  1. Clone the repository
  2. Install dependencies:
     ```bash
     npm install
     ```

  ### Development

  Run the development server:
  ```bash
     npm run dev
     ```

  The site will be available at `http://localhost:3000`

  ### Building for Production

  Create an optimized production build:
  ```bash
     npm run build
     ```

  The build output will be in the `build` directory.

  ## Deployment

  The site can be deployed to any static hosting service:

  ### Vercel
  1. Push your code to GitHub
  2. Import the project in Vercel
  3. Vercel will automatically detect Vite and deploy

  ### Netlify
  1. Push your code to GitHub
  2. Import the project in Netlify
  3. Build command: `npm run build`
  4. Publish directory: `build`

  ### GitHub Pages
  1. Install `gh-pages`: `npm install --save-dev gh-pages`
  2. Add to `package.json` scripts:
     ```json
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
     ```
  3. Run `npm run deploy`

  ### Other Static Hosts
  - Upload the contents of the `build` directory to your hosting service
  - Ensure your server is configured to serve `index.html` for all routes (SPA routing)

  ## Technologies Used

  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS
  - Radix UI
  - Lucide React Icons

  ## License

  © 2025 Emīls Ronis. All rights reserved.
  