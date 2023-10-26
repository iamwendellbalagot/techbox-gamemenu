import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../index.css";

function Carousel() {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000 }}
        className="mySwiper h-[300px] "
      >
        <SwiperSlide className="text-red-500">
          <div>
            <img
              src="images/banner/banner-techbox.png"
              alt="loading"
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-red-500">
          <div>
            <img
              src="images/banner/pubg.jpg"
              alt="loading"
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-red-500">
          <div>
            <img
              src="images/banner/dota2-b.jpg"
              alt="loading"
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-red-500">
          <div>
            <img
              src="images/banner/valo-banner.jpg"
              alt="loading"
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
