import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    position: 'relative' // Added for absolute positioning of home link
  };

  const homeLinkStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: '#6039CD',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    transition: 'color 0.3s ease'
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '24px'
  };

  const inputGroupStyle = {
    marginBottom: '20px',
    width: '100%'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
    fontSize: '14px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6039CD',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <Link 
          to="/" 
          style={homeLinkStyle}
          onMouseOver={(e) => e.target.style.color = '#4527A0'}
          onMouseOut={(e) => e.target.style.color = '#6039CD'}
        >
          ← Back to Home
        </Link>

        <h2 style={titleStyle}>Sign Up</h2>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your email"
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your password"
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Confirm your password"
            required
          />
        </div>

        <button 
          type="submit" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4527A0'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6039CD'}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
