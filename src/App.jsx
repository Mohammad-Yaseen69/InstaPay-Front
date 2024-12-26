import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, PaymentAddress } from "./pages";
import useApi from "./Api/useApi";
import { MyContext } from './context/MyContext';

const App = () => {
  const { data: userData, error: userError, loading: userLoading } = useApi("user/get-user-details/spoidy");
  const { data: paymentData, error: paymentError, loading: paymentLoading } = useApi("payment-address/get-payment-address-public/spoidy");

  const { setUserData, setPaymentAddress, setLoading, setError } = useContext(MyContext);

  useEffect(() => {
    if (userData) {
      setUserData(userData.userProfileInfo);
    }
    if (paymentData) {
      setPaymentAddress(paymentData);
    }
    setLoading(userLoading || paymentLoading);
    setError(userError || paymentError);
  }, [userData, paymentData, userError, paymentError, userLoading, paymentLoading]);
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
