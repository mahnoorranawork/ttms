import React, { useState } from 'react';
import './style/login.css'; // Import your CSS file
import { Link,Navigate,useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    // ... your login code
    navigate('/admin');

    try {
      // Send a POST request to your server or authentication service to log in
      const response = await fetch('/api/login', {
        // ... your request details
      });

      if (response.status === 200) {
        // Login successful
        alert('Login successful');
        // Optionally, you can perform additional actions like setting user authentication tokens or cookies.

      } else {
        // Login failed
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="login-button">Login</button>
        <Link to='/register'  >Create Account</Link>

      </form>
    </div>
  );
};

export default Login;
