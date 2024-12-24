import React, { useState } from 'react'
import { ProfileInfo } from "../"

const ProfileHeader = () => {
    const [banner, setBanner] = useState("https://t3.ftcdn.net/jpg/02/47/02/84/360_F_247028431_yPo8nwG9HuQN6oHyix8YnhYBeOXtF0c4.jpg")
    return (
        <>
            <div className="banner" style={{ background: `url(${banner})` }}>
                <div className="overlay"></div>
                <button>Change</button>
            </div>

            <ProfileInfo />

        </>
    )
}

export default ProfileHeader
