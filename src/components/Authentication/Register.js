import React, { useState } from 'react';
import './style/register.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
  // Simulated API function (replace with actual API)
const registerUser = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success (status code 201) for demonstration
      resolve({ status: 201, message: 'Registration successful' });
      
      // Simulate failure (status code 400) for demonstration
      // reject({ status: 400, message: 'Registration failed' });
    }, 1000); // Simulated delay of 1 second
  });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic form validation (you can enhance this as needed)
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      // Simulate registration using the mock API
      const response = await registerUser(formData);
  
      if (response.status === 201) {
        // Registration successful
        alert('Registration successful');
        // Optionally, you can redirect the user to the login page here.
      } else {
        // Registration failed
        alert('Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }
  };
  

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
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
        <button type="submit" className="register-button">Register</button>
        <Link to='/login'  >Already Have Account</Link>

      </form>
      
    </div>
  );
};

export default Register;
