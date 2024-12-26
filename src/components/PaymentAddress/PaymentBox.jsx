import React, { useState } from 'react';
import { CustomDropdown } from "../"
import Back from "../../assets/Back.svg"
import Camara from "../../assets/Camara.svg"
import InstPay from "../../assets/InstaPaySmall.svg"
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';

const currencies = [
    { name: "USD", symbol: "$" },
    { name: "EUR", symbol: "€" },
    { name: "GBP", symbol: "£" },
    { name: "JPY", symbol: "¥" },
    { name: "AUD", symbol: "A$" },
    { name: "CAD", symbol: "C$" },
    { name: "CHF", symbol: "Fr" },
    { name: "CNY", symbol: "¥" },
    { name: "INR", symbol: "₹" },
    { name: "RUB", symbol: "₽" },
    { name: "BRL", symbol: "R$" },
    { name: "ZAR", symbol: "R" },
    { name: "NZD", symbol: "NZ$" },
    { name: "SEK", symbol: "kr" },
    { name: "NOK", symbol: "kr" },
    { name: "MXN", symbol: "MX$" },
    { name: "SGD", symbol: "S$" },
    { name: "HKD", symbol: "HK$" },
    { name: "KRW", symbol: "₩" },
    { name: "TRY", symbol: "₺" },
    { name: "PKR", symbol: "₨" }
];

const PaymentBox = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [showDropdown, setShowDropdown] = useState(false);
    const { paymentAddress } = useContext(MyContext)

    const handleSelect = (currency) => {
        setSelectedCurrency(currency);
        setShowDropdown(false);
    };


    document.addEventListener("click", (e) => {
        if (!e.target.closest(".custom-dropdown")) {
            setShowDropdown(false);
        }
    })

    return (
        <div className='payment-box' style={{ backgroundColor: "#F8F8F8", padding: "20px", borderRadius: "22px", margin: "30px 20px" }}>
            <CustomDropdown setShowDropdown={setShowDropdown} currencies={currencies} handleSelect={handleSelect} selectedCurrency={selectedCurrency} showDropdown={showDropdown} />

            <p style={{ color: "#7D7D7D", fontSize: "14px", fontWeight: 600, margin: "10px 0" }}>Amount</p>

            <div style={{ display: "flex", alignItems: "center", backgroundColor: "transparent", borderRadius: "8px", padding: "0", fontSize: "30px", fontWeight: 600 }}>
                <span style={{ marginRight: "1px", fontWeight: "bold" }}>{selectedCurrency.symbol}</span>
                <input
                    type="number"
                    placeholder={paymentAddress?.limits?.topup_min_amount}
                    style={{ border: "none", outline: "none", width: "100%", fontSize: "30px", fontWeight: "bold", backgroundColor: "transparent" }} />
            </div>

            <div style={{ marginTop: "30px" }}>
                <button>
                    <img src={Camara} alt="" />
                    Pay as a Guest
                </button>
                <button style={{ backgroundColor: "#5926F0", color: "white" }}>
                    <img src={InstPay} alt="" />
                    Pay with InstaPay
                </button>
                <button>
                    <img src={Back} alt="" />
                    Go back (Cancel Payment)
                </button>
            </div>
        </div>
    );
};

export default PaymentBox;
