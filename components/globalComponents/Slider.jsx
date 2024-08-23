import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Card from "./Card";
import cardData from "./cardData";

const Slider = () => {
  return (
    <div className="pl-[11%] pb-[8.75rem] mt-12 max-[768px]:mt-[6rem]">
      <Swiper
        spaceBetween={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay]}
      >
        {cardData.map((info) => (
          <SwiperSlide>
            <Card text={info.text} title={info.title} className="max-[768px]:h-[150px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
