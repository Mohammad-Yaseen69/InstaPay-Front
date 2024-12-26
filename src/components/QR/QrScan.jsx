import React, { useState } from 'react';
import QrCode from "./QRCode"
import './QrScan.css';
import { useTranslation } from 'react-i18next';

const countries = [
  { name: "United States", code: "US", continent: "North America", currency: "USD" },
  { name: "Pakistan", code: "PK", continent: "Asia", currency: "PKR" },
  { name: "India", code: "IN", continent: "Asia", currency: "INR" },
  { name: "United Kingdom", code: "GB", continent: "Europe", currency: "GBP" },
  { name: "Canada", code: "CA", continent: "North America", currency: "CAD" },
  { name: "Australia", code: "AU", continent: "Oceania", currency: "AUD" },
  { name: "Germany", code: "DE", continent: "Europe", currency: "EUR" },
  { name: "China", code: "CN", continent: "Asia", currency: "CNY" },
  { name: "Japan", code: "JP", continent: "Asia", currency: "JPY" },
  { name: "South Africa", code: "ZA", continent: "Africa", currency: "ZAR" },
];

const QrScan = () => {
  // Initialize with the country object where the name is "United States"
  const [currentCurrency, setCurrentCurrency] = useState(countries.find(country => country.name === "United States"));
  const { t } = useTranslation()

  const handleChange = (e) => {
    const selectedContinent = e.target.value; // Get the selected continent from the dropdown
    const selectedCountry = countries.find(country => country.continent === selectedContinent); // Find the country matching the continent
    setCurrentCurrency(selectedCountry); // Set the selected country object
  };

  return (
    <div className='QrScan'>
      <h6 style={{ fontSize: '12px', color: "white", fontWeight: 600 }}>{t("customize_your")}</h6>
      <h2 style={{ fontSize: '20px', color: "white", fontWeight: 700 }}>{t("pay_with_qr")}</h2>

      <div style={{ marginTop: "20px" }}>
        <select onChange={handleChange} value={currentCurrency?.continent}>
          {countries.map((country, index) => (
            <option key={index} value={country.continent}>
              {country.currency}
            </option>
          ))}
        </select>

        <div className='qr-code-div'>
          <QrCode data={`Currency: ${currentCurrency?.currency}, Country: ${currentCurrency?.name}`} />
          <h2 style={{ fontSize: "16px", padding: "10px 0", backgroundColor: "#5926F0", color: "white", marginTop: "10px" }}>INSTA-AB1234CD</h2>
          <h3 style={{ fontSize: "12.5px", marginTop: "10px" }}>MERCHANT NAME</h3>
        </div>
      </div>
    </div>
  );
};

export default QrScan;
