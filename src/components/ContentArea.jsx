import { useTranslation } from "react-i18next"
import { ProfileHeader, Form, QrScan, LanguageSwitcher } from "./"
import { useContext } from "react"
import { MyContext } from "../context/MyContext"

const ContentArea = () => {
    const { t } = useTranslation()
    const { loading } = useContext(MyContext)
    console.log(loading)
    return (
        <div className='content-area'>
            {!loading ?
                (<>
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

                    <div className="mobile-only" style={{ marginTop: '40px', display: "none", justifyContent: "center", alignItems: "center" }}>
                        <QrScan />
                    </div>
                </>) :
                (
                    <div style={{display: "grid", placeContent: "center", height: "100vh" }}>
                        <div className="loader"></div>
                    </div>
                )
            }
        </div>
    )

}

export default ContentArea
