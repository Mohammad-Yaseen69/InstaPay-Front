import Flag from "react-world-flags"
import { PaymentBox } from "../"

const pfpPath = "https://s3-alpha-sig.figma.com/img/af04/e939/16f7ad02cf556985cd136ab97f08c9d2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DxjCweXSlaO26nmjs5DfPVoqTD2jd7tzmjKbbv99Bc91x3cimAlIdPGccSCUF7cUzUeR1k~YLmxcVLQuN3vZI2yhwykSBIHLukY4qBhegERUBcPLVjKDw8UCOgrWZwFTehtRO72Uba1ZBvlZJ49kh8V-8UYrT~hslSnOkTfrC-Kcvtv0kK45JyrBJDauSUByjza94xj~~yjmF~CF4rmj9F4m0VZD3R9xP~nQ6yY5bwejtKkPYxRIRyxe1ionOJcBaHdY-05m6GjneeB~6DOZN8YpHKSSaCLp1KPmLxI~3-aG1WTVD3UYgFqHnO6DMxlFYiXXNmU16wu2E9-dRD2MeQ__"
const bannerPath = "https://s3-alpha-sig.figma.com/img/b656/7125/7bc253b7b38848a8a239672f16778033?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DHJAKH5~0dYp0QB-9jFFVhznmsZxgow6BbOBU9N9w4b2oUiozEgMSX8oPg2dxZtptmthZAgjeI~N6e8nyR8hz0cCoE19pt-aOXz-S-Isyp1rJpTbLf5Rgk~Ig5OqGJrrLLLz~3B-i18o8OaB2tqoHPnfdJGzE5WDNCBYk7uvs9YWVW5Ylka1aIQ1c-eiJv5LozX2hSTn3tcwiWzhR24gmRJE-OYzmYTQM2Z9vU29Jh1~QH6VqZiwI7SOsUtBQJ92JA8hsp7NLrLupnXiao4rh3jzhHw80DAxOh4vxNkcZGUyN6Rnc47rsm0RUCWbN0y7Qutsoj5Ht2qRoxTN675xRw__"


const Profile = () => {
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
                    <img height={"200px"} width={"100%"} style={{ objectFit: "cover" }} src={bannerPath} alt="" />
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
                    <img src={pfpPath}
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
                    }}>Don Van Krieger</h1>

                    <span style={{ display: "flex", gap: "5px", fontSize: "11px", color: "#6C6C6C", fontWeight: 600 }}><Flag code="GB" width={25} style={{ borderRadius: "3px" }} />United Kingdom</span>
                </div>
            </div>


            <PaymentBox />
        </div>
    )
}

export default Profile
