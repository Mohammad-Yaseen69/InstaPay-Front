import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, PaymentAddress } from "./pages";
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
