import React, { useState } from 'react';
import Error from "../assets/Icon.svg";
import { VideoGallery } from "./"
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Form = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { userData, paymentAddress } = useContext(MyContext)
    const { t } = useTranslation()

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='form'>
            <div>
                <h1 style={{ fontSize: '22px' }}>{t("customize_public_page")}</h1>
                <button className='primary-btn'>{t("edit")}</button>
            </div>
            <form>
                <div className='input-fields'>
                    <label htmlFor="payment-title">{t("payment_address_title")}</label>
                    <input
                        type="text"
                        value={paymentAddress?.paymentAddressDetails?.title}
                        id="payment-title"
                    />
                </div>
                <div style={{ marginTop: "20px" }} className='input-fields'>
                    <label htmlFor="description">{t("description")}</label>
                    <textarea
                        value={paymentAddress?.paymentAddressDetails?.description}
                        id="description"
                        aria-expanded={false}
                    />
                </div>
                <div style={{ marginTop: "20px" }} className='input-fields'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <label>{t("add_video")} <img src={Error} alt="Error icon" /></label>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleToggle}
                            />
                            <div className="slider">
                                <div className="circle">
                                    <svg className="cross" viewBox="0 0 365.696 365.696" height="6" width="6">
                                        <g>
                                            <path fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                        </g>
                                    </svg>
                                    <svg className="checkmark" viewBox="0 0 24 24" height="10" width="10">
                                        <g>
                                            <path fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </label>
                    </div>
                    <VideoGallery isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </div>
            </form>
        </div>
    );
};

export default Form;