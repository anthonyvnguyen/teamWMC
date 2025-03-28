# Team WMC Website

This is a React-based website for Team WMC, an IT solutions company offering cloud, cyber security, and networking solutions.

## Features

-   Responsive design based on Figma mockup
-   Multiple pages for different services
-   Navigation with React Router
-   Contact form with validation
-   Modern UI with clean aesthetics

## Pages

-   **Home**: Overview of the company and services
-   **Cloud Solutions**: Details about cloud services
-   **Cyber Security**: Information about security offerings
-   **Networking**: Overview of networking solutions
-   **Contact**: Form for getting in touch with the company

## Technologies Used

-   React
-   TypeScript
-   React Router
-   CSS for styling

## Getting Started

### Prerequisites

-   Node.js (v14.0.0 or later)
-   npm (v6.0.0 or later)

### Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd teamWMC
```

3. Install dependencies:

```
npm install
```

### Running the Development Server

To start the development server:

```
npm start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build:

```
npm run build
```

The build files will be created in the `build` directory.

## Project Structure

```
teamWMC/
├── public/                  # Public assets
├── src/                     # Source files
│   ├── assets/              # Images and other assets
│   │   └── images/          # Image files
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── Navbar.css       # Navbar styles
│   ├── pages/               # Page components
│   │   ├── CloudSolutions.tsx
│   │   ├── CyberSecurity.tsx
│   │   ├── Networking.tsx
│   │   └── Contact.tsx
│   ├── styles/              # Stylesheets
│   │   ├── Solutions.css    # Styles for solution pages
│   │   └── Contact.css      # Styles for contact page
│   ├── App.tsx              # Main App component
│   ├── App.css              # App styles
│   └── index.tsx            # Entry point
└── package.json             # Dependencies and scripts
```

## Next Steps / Future Improvements

-   Add more detailed content for each service
-   Implement a blog/insights section
-   Add testimonials and case studies
-   Implement form submission functionality
-   Add animations and transitions for better UX

## License

This project is licensed under the MIT License.
