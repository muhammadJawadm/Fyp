import React from 'react';
import './ProfilePage.css'; 
// Import the CSS file for styling

const Userprofile = () => {
  // Dummy user data for demonstration
  const user = {
    profilePic: 'https://via.placeholder.com/150',
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    bio: 'A short bio about John Doe. Enthusiastic web developer and tech lover.',
    location: 'New York, USA',
    joinedDate: 'January 2022'
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h1 className="username">{user.username}</h1>
        <p className="email">{user.email}</p>
      </div>
      <div className="profile-info">
        <div className="info-item">
          <h3>Bio</h3>
          <p>{user.bio}</p>
        </div>
        <div className="info-item">
          <h3>Location</h3>
          <p>{user.location}</p>
        </div>
        <div className="info-item">
          <h3>Joined</h3>
          <p>{user.joinedDate}</p>
        </div>
      </div>
      <div className="profile-actions">
        <button className="btn btn-primary">Edit Profile</button>
        <button className="btn btn-secondary">Logout</button>
      </div>
    </div>
  );
};

export default Userprofile;
