import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { VideoPlayer } from "../"
import "swiper/css"
import "swiper/css/pagination"

const VideoSlider = ({ videos }) => {
  console.log(videos)
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }} // Enable clickable dots
      modules={[Pagination]} // Add required modules
      navigation // Enable navigation arrows
      
    >
      {videos?.map((video, index) => (
        <SwiperSlide key={index}>
          <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "8px" }}>
            <VideoPlayer 
              height="250px"
              width="100%"
              thumbnail={video.thumbnail}
              videoUrl={video.videoUrl}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default VideoSlider
