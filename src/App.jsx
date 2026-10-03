import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

/**
 * App Component
 * 
 * Central router and application entry point.
 * We store user state here to share between the LoginPage and DashboardPage.
 */
export default function App() {
  const [currentUser, setCurrentUser] = useState({ username: 'creator_alex' });

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Login Page */}
        <Route 
          path="/" 
          element={<LoginPage onLoginSuccess={handleLoginSuccess} />} 
        />

        {/* Route for the Dashboard */}
        <Route 
          path="/dashboard" 
          element={<DashboardPage user={currentUser} onLogout={handleLogout} />} 
        />

        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
