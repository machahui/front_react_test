// src/components/Logout.js
import React from 'react';
import { logout } from '../services/authService';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logged out');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
