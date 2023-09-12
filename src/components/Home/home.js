// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Home = () => {
  return (
    <div>
      <h1>Welcome to GarmentApp</h1>
      <p>
        GarmentApp is your one-stop destination for ordering custom clothing and managing your orders.
      </p>
      <p>
        To get started, you can:
      </p>
      <ul>
       <li><Link to="/admin">Admin</Link> </li>
        <li><Link to="/login">Login</Link> to your account</li>
        <li><Link to="/register">Register</Link> for a new account</li>
        <li><Link to="/forgot-password">Forgot your password?</Link> Reset it here</li>
        <li><Link to="/scaner">Document Scanner</Link> </li>
        <li><Link to="/facecapture">Face Capture</Link> </li>
      </ul>
      <p>
        Once you are logged in, you can apply for new clothes, manage your orders, and access the admin dashboard if you have admin privileges.
      </p>
    </div>
  );
};

export default Home;
