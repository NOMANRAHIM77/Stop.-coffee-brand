import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check local storage for the user data we saved during login
  const isAuthenticated = localStorage.getItem('user');

  // If user data exists, show the protected component
  // Otherwise, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;