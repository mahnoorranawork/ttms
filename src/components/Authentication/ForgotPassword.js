// src/components/Authentication/ForgotPassword.js
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);

  const handleResetPassword = () => {
    // Implement actual password reset logic here, e.g., API call to your backend.
    // For simplicity, we'll just simulate a successful reset request here.
    setResetRequested(true);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {resetRequested && <p>Reset password link sent to your email.</p>}
    </div>
  );
};

export default ForgotPassword;
