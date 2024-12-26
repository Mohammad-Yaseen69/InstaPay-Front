import { useTranslation } from "react-i18next"
import { AddressBox } from "../"
import Flag from "react-world-flags"
import { useContext } from "react"
import { MyContext } from "../../context/MyContext"

const ProfileInfo = () => {
    const { t } = useTranslation()
    const {paymentAddress, userData} = useContext(MyContext)

    return (
        <div className='profile-info'>
            <div className='info' style={{ paddingLeft: "30px" }}>
                <div className='pfp'>
                    <img
                     src={paymentAddress?.paymentAddressDetails?.profileImage?.url} alt="" width={200} height={200} style={{ objectFit: "cover", borderRadius: "16px" }} />

                    <div>
                        <span>{t("change")}</span>
                        <span>|</span>
                        <span>{t("delete")}</span>
                    </div>
                </div>

                <div className='details'>
                    <span>Personal Account</span>
                    <h1>{userData?.first_name} {userData?.last_name}</h1>
                    <div style={{display: "flex", alignItems:"center"}}>
                        <Flag code={'pak'} width={25}/>
                        <span>{userData?.country_name}</span>
                    </div>
                </div>
            </div>

            <div className="desktop-address">
                <AddressBox />
            </div>

        </div>
    )
}

export default ProfileInfo
