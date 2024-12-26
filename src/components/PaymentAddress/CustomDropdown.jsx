import DownArrow from "../../assets/DownArrow.svg"

const CustomDropdown = ({ handleSelect, currencies, selectedCurrency, showDropdown, setShowDropdown }) => {
    return (
        <>
            <div
                className="custom-dropdown"
                style={{
                    backgroundColor: "#5926F00F",
                    padding: "10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: '12px',
                    fontWeight: 600,
                    width: "fit-content",
                    display: "flex",
                    alignItems: "center",
                }}
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span style={{
                    padding: "1px 6px",
                    borderRadius: "6px",
                    background: "linear-gradient(340.52deg, #E64067 -4.84%, #5926F0 90.69%, #4828A0 166.81%)",
                    color: "white",
                    marginRight: '4px'
                }}>
                    {selectedCurrency.symbol}
                </span>

                {selectedCurrency.name}

                <img src={DownArrow} alt="" style={{ marginLeft: "7px" }} />
            </div>
            {showDropdown && (
                <div style={{ position: "absolute", backgroundColor: "white", border: "1px solid #ccc", borderRadius: "8px", marginTop: "5px", zIndex: 10, maxHeight: "250px", overflow: "auto" }}>
                    {currencies.map((currency, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(currency)}
                            style={{ padding: "4px", cursor: "pointer", backgroundColor: "#fff", borderBottom: "1px solid #ccc", margin: "2px", fontSize: "12px" }}
                        >

                            {currency.name}
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default CustomDropdown
