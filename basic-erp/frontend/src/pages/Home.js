import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Basic ERP Application</h1>
      <p>
        This is a simple ERP application designed to help manage your business processes effectively.
      </p>
      <div className="features">
        <h2>Features:</h2>
        <ul>
          <li>User Registration and Login</li>
          <li>Role-based Access Control</li>
          <li>Activity Tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
