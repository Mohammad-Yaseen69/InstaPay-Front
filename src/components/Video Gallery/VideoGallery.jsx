import { useTranslation } from "react-i18next";
import {VideoPlayer, Model} from "../"

const VideoGallery = ({ isModalOpen, setIsModalOpen }) => {
    const {t} = useTranslation()
    return (
        <div style={{ backgroundColor: "#F3F2F6", padding: "10px", borderRadius: "4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1 style={{ fontSize: "14px", fontWeight: 600 }}>{t("add_video_description")} </h1>
                <div>
                    <span style={{ fontSize: "12px", color: "rgba(136, 106, 218, 1)", marginRight: "10px", fontWeight: 600 }}>{t("manage")}</span>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsModalOpen(!isModalOpen);
                        }}
                        className="primary-btn"
                    >
                        {t("add_video")}
                    </button>
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(250, 250, 250)", padding: "10px", borderRadius: "7px", marginTop: "20px", display: "flex", gap: "10px", flexWrap: "nowrap", overflow: "auto" }}>
                <VideoPlayer
                    thumbnail={'https://images.pexels.com/photos/101841/pexels-photo-101841.jpeg?cs=srgb&dl=pexels-asphotograpy-101841.jpg&fm=jpg'}
                    videoUrl={'https://www.w3schools.com/html/mov_bbb.mp4'}
                />
                <VideoPlayer
                    thumbnail={'https://images.pexels.com/photos/101841/pexels-photo-101841.jpeg?cs=srgb&dl=pexels-asphotograpy-101841.jpg&fm=jpg'}
                    videoUrl={'https://www.w3schools.com/html/mov_bbb.mp4'}
                />
                <VideoPlayer
                    thumbnail={'https://images.pexels.com/photos/101841/pexels-photo-101841.jpeg?cs=srgb&dl=pexels-asphotograpy-101841.jpg&fm=jpg'}
                    videoUrl={'https://www.w3schools.com/html/mov_bbb.mp4'}
                />
            </div>

            <Model
                isOpen={isModalOpen}
                onClose={(e) => {
                    e.preventDefault();
                    setIsModalOpen(!isModalOpen);
                }}
            />
        </div>
    );
};

export default VideoGallery;
