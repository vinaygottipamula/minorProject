// components/LogoutButton.js

import React from 'react';
import axios from 'axios';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout'); // Call the backend logout route
      onLogout(); // Call the callback function to perform any necessary UI updates
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
