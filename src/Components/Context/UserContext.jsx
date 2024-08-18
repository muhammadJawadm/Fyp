// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error("Token not found. Please log in.");
        }

        const response = await axios.get('http://localhost:3002/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          withCredentials: true
        });

        if (response.data && response.data.username) {
          setUsername(response.data.username);
        }
      } catch (error) {
        console.error("Error fetching user details:", error.response ? error.response.data : error.message);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
