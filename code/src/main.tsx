// Import React for JSX transformation and hooks usage
import React from 'react';
// Import the ReactDOM client API to render the React application into the DOM
import ReactDOM from 'react-dom/client';
// Import the main App component
import App from './App';
// Import the global CSS styles for the application
import '../app/style/index.css';

// Create a root DOM node and render the App component inside React's StrictMode
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Render the main application component */}
    <App />
  </React.StrictMode>
);