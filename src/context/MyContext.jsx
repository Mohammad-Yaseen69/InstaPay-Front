// context/MyContext.js
import React, { createContext, useState, useEffect } from "react";
import useApi from "../Api/useApi";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const { data: userDataResponse, error: userError, loading: userLoading } = useApi("user/get-user-details/spoidy");
  const { data: paymentDataResponse, error: paymentError, loading: paymentLoading } = useApi("payment-address/get-payment-address-public/spoidy");

  const [userData, setUserData] = useState(null);
  const [paymentAddress, setPaymentAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userDataResponse) {
      setUserData(userDataResponse.userProfileInfo);
    }
    if (paymentDataResponse) {
      setPaymentAddress(paymentDataResponse);
    }
    setLoading(userLoading || paymentLoading);
    setError(userError || paymentError);
  }, [userDataResponse, paymentDataResponse, userError, paymentError, userLoading, paymentLoading]);


  return (
    <MyContext.Provider value={{ userData, paymentAddress, loading, error, setUserData, setPaymentAddress }}>
      {children}
    </MyContext.Provider>
  );
};