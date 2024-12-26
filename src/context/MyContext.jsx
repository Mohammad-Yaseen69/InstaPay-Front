import { useState } from 'react';
import { createContext } from "react";

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    const [paymentAddress, setPaymentAddress] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    return (
        <MyContext.Provider value={{ userData, setUserData, paymentAddress, setPaymentAddress, loading, setLoading, error, setError }}>
            {children}
        </MyContext.Provider>
    )
}