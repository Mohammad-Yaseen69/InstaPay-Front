import React from "react";
import { Home, Login, Signup,PaymentAddress } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/paymentaddress" element={<PaymentAddress />} />
      </Routes>
    </Router>
  );
};

export default App;
