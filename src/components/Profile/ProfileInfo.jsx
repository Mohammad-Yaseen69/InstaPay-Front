import { useTranslation } from "react-i18next"
import { AddressBox } from "../"
import Flag from "react-world-flags"

const ProfileInfo = () => {
    const { t } = useTranslation()

    return (
        <div className='profile-info'>
            <div className='info' style={{ paddingLeft: "30px" }}>
                <div className='pfp'>
                    <img src="https://s3-alpha-sig.figma.com/img/10b9/de3c/d370e38f92efef49173c1322067e54e1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPwCsPpbSyr3fRBb3cw8~Cu10QZtAfapcFNZFsKUCE00i5h8Z80iCXXeFiO2XwjxN5XuNzXHV~psGRfUQckQ3eTUrKF1iymTA-lJCPSIA5Av73f8ylLbV7nbngQ2NMjBAFhzdc7Y4ad4IC4wc9wMW1V5Xj8lLK1An4gMHgJSfkzXyNpI5YAf7wzdDDQHRLPgFjxBa69xL0y49plRvDjYz~tZhr6UUjcDhDqUiF27VV87DKoBCL7UWeLC8Mr3fKKYJAalSPVQNvoIYolloZUnTAH4lD4x5lg6TnFmTkVUKsBZvyJWF-FOG6jWeDmwBpgTY4t8atxhvEtn4K3xO9shQA__" alt="" width={200} height={200} style={{ objectFit: "cover", borderRadius: "16px" }} />

                    <div>
                        <span>{t("change")}</span>
                        <span>|</span>
                        <span>{t("delete")}</span>
                    </div>
                </div>

                <div className='details'>
                    <span>Personal Account</span>
                    <h1>Liam Anderson</h1>
                    <div style={{display: "flex", alignItems:"center"}}>
                        <Flag code="ca" width={25}/>
                        <span>Canada</span>
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
