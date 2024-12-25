import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Man from "../assets/Man_bg.png"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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



  return (
    <div style={{ display: "flex", overflow: 'hidden', height: "clamp(100vh, 100vh, 100vh)" }}>
      <div style={{
        flex: 1, height: "100%", background: "rgb(230,64,103)",
        background: "linear-gradient(169deg, rgba(230,64,103,1) 0%, rgba(88,38,240,1) 43%)"
      }}>
        <img src={Man} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "30px 20px"   }}>
asd
      </div>
    </div>
  );
};

export default Login;
