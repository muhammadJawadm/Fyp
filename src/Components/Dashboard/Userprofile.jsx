import React, { useState, useEffect } from 'react';
import './ProfilePage.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Userprofile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate for navigation

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Get the token from localStorage
        
        if (!token) {
          // If no token is found, redirect to login
          navigate('/Login');
          return;
        }

        // Make the request to get user profile details
        const response = await axios.get('http://localhost:3002/profile', {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the Authorization header
          },
          withCredentials: true
        });

        console.log('User details response:', response.data);
        if (response.data && response.data.username) {
          setUsername(response.data.username);
          setEmail(response.data.email);
        } else {
          console.warn('Username not found in response:', response.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error.response ? error.response.data : error.message);
        // If an error occurs (e.g., token is invalid), redirect to login
        navigate('/Login');
      }
    };

    fetchUserDetails();
  }, [navigate]);  // Include navigate in the dependency array to avoid errors

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="username">{username}</h1>
        <p className="email">{email}</p>
      </div>
      {/* Rest of your profile details */}
    </div>
  );
};

export default Userprofile;
