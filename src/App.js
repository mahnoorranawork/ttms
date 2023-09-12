// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Admin from './components/Admin/AdminDashboard';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import ForgotPassword from './components/Authentication/ForgotPassword';
import ClothOrder from './components/ClothOrder/ClothOrderForm';
import DocumentScanner from './components/eKYC/DocumentScanner';
import FaceCapture from './components/eKYC/FaceCapture';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes within the <Routes> component */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/clothorder" element={<ClothOrder />} />
        <Route path="/scaner" element={<DocumentScanner />} />
        <Route path="/facecapture" element={<FaceCapture />} />

      </Routes>
    </Router>
  );
}

export default App;
