import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl, thumbnail }) => {
  return (
    <div style={{ position: "relative", width: "180px", height: "100px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        light={thumbnail}
        width="100%"
        height="100%"
        style={{borderRadius: "8px"}}
      />
    </div>
  );
};

export default VideoPlayer;
