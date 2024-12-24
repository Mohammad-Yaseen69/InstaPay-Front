import { useTranslation } from "react-i18next"
import { ProfileHeader, Form, QrScan, LanguageSwitcher } from "./"

const ContentArea = () => {
    const { t } = useTranslation()
    return (
        <div className='content-area'>
            <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", marginBottom: "50px" }}>
                <h1 className="head-main">{t("my_payment_address")}</h1>
                <LanguageSwitcher />

            </div>
            <ProfileHeader />
            <div className="form-scan" style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
                <Form />
                <div className="desktop-qr">
                    <QrScan />
                </div>
            </div>

            <div className="mobile-only" style={{ marginTop: '40px', display: "none", justifyContent: "center" , alignItems: "center"  }}>
                <QrScan />
            </div>
        </div>
    )
}

export default ContentArea
