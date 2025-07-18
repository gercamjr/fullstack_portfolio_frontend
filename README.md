# Portfolio Project

This project is a modern, responsive portfolio website built with React for the frontend and Sanity for the backend.

## Overview

The frontend is a single-page application created with [Create React App](https://github.com/facebook/create-react-app). It showcases personal information, skills, work experience, and projects. The application is designed to be visually appealing with animations using `framer-motion`.

The content for the portfolio is managed through a headless CMS, [Sanity.io](https://www.sanity.io/). This allows for easy updates to the portfolio content without needing to change the code.

## Getting Started

To get the frontend running locally:

1.  **Clone the repository** (if you haven't already).
2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the development server**:

    ```bash
    npm start
    ```

    This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

The frontend codebase is organized as follows:

- `src/`: Contains all the source code.
  - `assets/`: Static assets like images and logos.
  - `components/`: Reusable UI components (e.g., `Navbar`, `SocialMedia`).
  - `constants/`: Exports for images and other constant values.
  - `container/`: Larger components that represent sections of the page (e.g., `About`, `Footer`, `Work`).
  - `wrapper/`: Higher-Order Components used for wrapping sections.
  - `client.js`: Configuration for the Sanity client to fetch data.
  - `App.js`: The main application component that assembles the different sections.
  - `index.js`: The entry point of the application.

## Connecting to Sanity

This project connects to a Sanity backend to fetch all its content. The connection details are configured in `src/client.js`. You will need to have a Sanity project with the corresponding schema and data.

The backend for this project can be found in the `fullstack_portfolio_backend` directory, which contains the Sanity Studio setup.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

This command will remove the single build dependency from your project and copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them.
