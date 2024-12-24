import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import QrLogo from "../../assets/QrLogo.svg";

const QRCode = ({ data }) => {
  const qrCodeRef = useRef(null);
  const qrCodeInstance = useRef(null);

  useEffect(() => {
    qrCodeInstance.current = new QRCodeStyling({
      width: 150,
      height: 150,
      data: data,
      image: QrLogo,
      dotsOptions: {
        color: "#000000",
        type: "rounded",
        radius: 1
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5,
        imageSize: 0.5,
        hideBackgroundDots: false
      },
    });

    qrCodeInstance.current.append(qrCodeRef.current);

    return () => {
      if (qrCodeRef.current) {
        qrCodeRef.current.innerHTML = '';
      }
    };
  }, [data]);

  return (
    <div
      ref={qrCodeRef}
      style={{ width: '100%', height: '100%', display: 'inline-block', padding: "0 10px" }}
    />
  );
};

export default QRCode;
