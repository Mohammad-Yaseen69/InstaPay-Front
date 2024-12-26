import Flag from "react-world-flags"
import { PaymentBox } from "../"
import { useContext } from "react"
import { MyContext } from "../../context/MyContext"


const Profile = () => {
    const {paymentAddress, userData} = useContext(MyContext)
    return (
        <div style={{
            width: "30%",
            zIndex: 12,
            backgroundColor: "white",
            borderRadius: "16px",
            overflow: 'hidden'
        }} className="profile">
            <div>
                <div style={{ position: 'relative', height: "200px" }}>
                    <img height={"200px"} width={"100%"} style={{ objectFit: "cover" }} src={"https://my.insta-pay.ch/static/media/cover_1.28d863fe381db7bbf2e3.png"} alt="" />
                    <div style={{
                        height: '100%',
                        width: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.56) 100%)"
                    }}></div>
                </div>

                <div style={{ zIndex: 20, marginTop: "-60px", display: "flex", alignItems: "center", flexDirection: "column", gap: '5px' }}>
                    <img src={paymentAddress?.paymentAddressDetails?.profileImage?.url}
                        style={{
                            height: "150px",
                            width: "150px",
                            borderRadius: "24px",
                            objectFit: "cover",
                            boxShadow: "0px 30.97px 21.39px -22.12px #AECFF",
                            zIndex: 20
                        }} alt="" />

                    <span style={{
                        fontSize: "10px",
                        padding: '5px 12px',
                        gap: '10px',
                        borderRadius: '99999px',
                        color: "white",
                        opacity: '0px',
                        backgroundColor: "#1AB11F",
                        marginTop: "15px"

                    }}>VPA Active</span>

                    <h1 style={{
                        fontSize: "26px"
                    }}>{userData?.first_name} {userData?.last_name}</h1>

                    <span style={{ display: "flex", gap: "5px", fontSize: "11px", color: "#6C6C6C", fontWeight: 600 }}><Flag code="pak" width={25} style={{ borderRadius: "3px" }} />{userData?.country_name}</span>
                </div>
            </div>


            <PaymentBox />
        </div>
    )
}

export default Profile
