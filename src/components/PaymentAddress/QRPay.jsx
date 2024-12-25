import { QrCode } from "../"
import Insta from "../../assets/Insta.svg"
import WA from "../../assets/Whatsapp.svg"
import TG from "../../assets/Telegram.svg"

const btnStyle = {
    border: "1px solid #5926F0",
    borderRadius: "6px",
    padding: "6px",
    color: "#5926F0",
    background: "#5926F0",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "100%",
    maxWidth: "150px",
    justifyContent: "center"
}

const QRPay = () => {
    return (
        <div
            style={{
                boxShadow: "0px 0px 12.2px 0px #0000001F",
                borderRadius: "16px",
                display: "flex",
                padding: "10px",
                textAlign: "center",
                gap: "20px",
            }}
            className="qr-pay-container"
        >
            <div
                style={{
                    border: "1px solid #5926F0",
                    borderRadius: "8px",
                    width: "25%",
                    padding: "0px 0 10px 0",
                    overflow: "hidden",
                }}
                className="qr"
            >
                <QrCode
                    padding="0"
                    data={"dummy data 1212121212121212121212"}
                />
                <h2
                    style={{
                        fontSize: "16px",
                        padding: "10px 0",
                        backgroundColor: "#5926F0",
                        color: "white"
                    }}
                >
                    LM3SRFQO
                </h2>
                <h3 style={{ fontSize: "12.5px", marginTop: "10px" }}>
                    SHAHEEN
                </h3>
            </div>
            <div style={{ padding: "10px", textAlign: "left" }}>
                <h1 style={{ fontSize: "14px", marginBottom: "30px" }}>How to Pay Using QR Code:</h1>

                <ol style={{ fontSize: '15px' }}>
                    <li style={{ margin: "0 0 10px 20px", paddingLeft: "5px", color: "#6C6C6C", fontWeight: 500 }}>
                        <p>Choose your preferred social media app or InstaPay App.</p>

                        <div style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
                            <button
                                style={btnStyle}
                            >

                                <img src={Insta} style={{ marginRight: "8px" }} alt="" />
                                Open Instagram
                            </button>
                            <button
                                style={btnStyle}
                            >
                                <img src={WA} style={{ marginRight: "8px" }} alt="" />
                                Open WhatsApp
                            </button>
                            <button
                                style={btnStyle}
                            >
                                <img src={TG} style={{ marginRight: "8px" }} alt="" />
                                Open Telegram
                            </button>
                        </div>
                    </li>
                    <li style={{ margin: "0 0 10px 20px", paddingLeft: "5px", color: "#6C6C6C", fontWeight: 500 }}>
                        Send "<strong>Hi</strong>" to <strong>@instapay_swiss</strong> and select <strong> QR QuickPay.</strong>
                    </li>
                    <li style={{ margin: "0 0 10px 20px", paddingLeft: "5px", color: "#6C6C6C", fontWeight: 500 }}>
                        Enter the <strong>Alphanumeric code (LM3SRFQO)</strong> or  <strong>Scan the QR code.</strong>
                    </li>
                    <li style={{ margin: "0 0 10px 20px", paddingLeft: "5px", color: "#6C6C6C", fontWeight: 500 }}>
                        Complete your payment.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default QRPay
