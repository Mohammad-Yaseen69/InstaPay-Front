import React from 'react';
import { useTranslation } from 'react-i18next';

const PaymentAddressBox = () => {
    const {t, i18n} = useTranslation()
    return (
        <div className="payment-address-box">
            <div className="header">
                <p className="share-text">{t("share_payment_address")}</p>
                <a href="#edit" className="edit-link">{i18n.language == "en" ? "edit" : t("edit")}</a>
            </div>
            <div className="payment-address">
                <span className="address-prefix">my.insta-pay.ch/pay/</span>
                <span className="address-value">
                    <p>shaheen</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path
                            d="M16 1.5H7.5C6.12 1.5 5 2.62 5 4V16C5 17.38 6.12 18.5 7.5 18.5H16C17.38 18.5 18.5 17.38 18.5 16V4C18.5 2.62 17.38 1.5 16 1.5ZM16 16H7.5V4H16V16ZM18 9.5H19V16C19 17.93 17.93 19 16 19H9V20H16C18.76 20 20 18.76 20 16V9.5H18Z"
                            fill="#777777"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default PaymentAddressBox;
