import React from "react";
import Alert from "../../assets/Alert.svg";
import Upload from "../../assets/Upload.svg";
import Play from "../../assets/Play.svg";
import "./Model.css";

const Model = ({ isOpen, onClose }) => {
    return (
        <div className={`overlay ${isOpen ? "visible" : "hidden"}`}>
            <div className="modal">
                <div className="left-section">
                    <div>
                        <div className="icon-container">
                            <img src={Play} alt="" />
                        </div>
                        <h2 className="heading">Add New Video</h2>
                    </div>
                    <p className="description">
                        Easily add videos to your public payment page! With InstaPay, you can showcase
                        your creativity and projects through engaging video content. Whether you're a
                        business owner or a creative professional, this feature allows you to connect
                        with your audience visually, enhancing your online presence.
                    </p>
                </div>

                <div className="right-section">
                    <div className="upload-box">
                        <div className="upload-icon">
                            <img src={Upload} alt="" width={25} />
                        </div>
                        <p className="upload-text">Drag/Drop or Upload a file from device</p>
                        <span className="file-limit">
                            <img src={Alert} alt="" /> Maximum file size: 20MB
                        </span>
                    </div>
                    <div className="select-portfolio">
                        <label htmlFor="portfolio">Add video from your portfolio</label>
                        <select id="portfolio" className="select">
                            <option>Select from portfolio</option>
                            <option>Video 1</option>
                            <option>Video 2</option>
                        </select>
                    </div>
                    <div className="buttons">
                        <button className="cancel-button" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="add-button">Add Video</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Model;
