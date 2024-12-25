import { useState } from "react";
import { VideoPlayer, VideoSlider, QRPay, Profile } from "../components";

const PaymentAddress = () => {
    const [videos, setVideos] = useState([
        {
            thumbnail:
                "https://images.pexels.com/photos/101841/pexels-photo-101841.jpeg?cs=srgb&dl=pexels-asphotograpy-101841.jpg&fm=jpg",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
            thumbnail:
                "https://images.pexels.com/photos/101841/pexels-photo-101841.jpeg?cs=srgb&dl=pexels-asphotograpy-101841.jpg&fm=jpg",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
            thumbnail:
                "https://images.pexels.com/photos/101841/pexels-photo-101841.jpeg?cs=srgb&dl=pexels-asphotograpy-101841.jpg&fm=jpg",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
    ]);
    const overlayStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: 1,
    };

    return (
        <div className="paymentAddressNew">
            <div style={overlayStyles}></div>
            <div
                className="main-container"
                style={{
                    display: "flex",
                    height: "100%",
                    gap: "20px",
                    padding: "50px",
                }}
            >
                <div
                    style={{
                        width: "70%",
                        zIndex: 12,
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "16px",
                    }}
                >
                    <div className="about-text" style={{ padding: "20px" }}>
                        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>About me</h1>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#7E7E7E",
                                fontWeight: 600,
                                marginBottom: "30px",
                            }}
                        >
                            Embrace simplicity with INSTA-PAY's chatbot experience. No matter
                            where you chat - Instagram, Telegram, Twitter, or WhatsApp, your
                            InstaPay wallet notifies you instantly upon fund reception,Embrace
                            simplicity with INSTA-PAY's chatbot experience. No matter where
                            you chat - Instagram, Telegram, Twitter, or WhatsApp, your
                            InstaPay wallet notifies you instantly upon fund reception
                        </p>
                    </div>

                    {videos.length > 1 ? (
                        <VideoSlider videos={videos} />
                    ) : videos.length > 0 ? (
                        <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "8px" }}>
                            <VideoPlayer
                                height="250px"
                                width="100%"
                                thumbnail={videos[0].thumbnail}
                                videoUrl={videos[0].videoUrl}
                            />
                        </div>
                    ) : null}

                    <QRPay />

                </div>

                <Profile />
            </div>


        </div >
    );
};

export default PaymentAddress;