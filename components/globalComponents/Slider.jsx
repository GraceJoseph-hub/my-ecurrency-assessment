import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Card from "./Card";
import cardData from "./cardData";


const Slider = () => {
  return (
    <div className="pl-[11%] pb-[3.75rem] mt-12 max-[768px]:mt-[6rem]">
      <Swiper
        spaceBetween={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // scrollbar={true}
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
        modules={[Autoplay, Scrollbar]}
        className="pb-[50px]"
      >
        {cardData.map((info, index) => (
          <SwiperSlide className="pb-[50px]" key={index}>
            <Card
              text={info.text}
              title={info.title}
              className="max-[768px]:h-[150px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[1px] max-w-[1110px] bg-[#213842]"></div>
    </div>
  );
};

export default Slider;
