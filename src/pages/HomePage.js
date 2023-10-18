import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const SlideComponent = ({ imageSrc, altText }) => {
  return (
    <img
      src={imageSrc}
      alt={altText}
      style={{ width: "100%", height: "40vw" }}
    />
  );
};

const HomePage = () => {
  return (
    <>
      <div>
        {/* swiper  */}
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation, Autoplay]}
          rewind={true}
          autoplay={{ delay: 4000 }}
          className="mySwiper"
        >
          <SwiperSlide>
            <SlideComponent
              imageSrc="../img/slide1.jpg"
              altText={"슬라이드1"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              imageSrc="../img/slide2.jpg"
              altText={"슬라이드2"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              imageSrc="../img/slide3.jpg"
              altText={"슬라이드3"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              imageSrc="../img/slide4.jpg"
              altText={"슬라이드4"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              imageSrc="../img/slide5.jpg"
              altText={"슬라이드5"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              imageSrc="../img/slide6.jpg"
              altText={"슬라이드6"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomePage;
