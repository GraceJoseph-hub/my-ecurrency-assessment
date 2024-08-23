import Image from "next/image";
import pen1 from '../../public/images/pen1.png'
import Title from "../globalComponents/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Card from "../globalComponents/Card";
import testimonialData from "../globalComponents/TestimonialData";


const Cards = ({isHomePage}) => {
  return (
    <div>
      <div className="flex flex-col gap-6 pt-10 pl-[11%]">
      <div className="h-[1px] max-w-[1110px] bg-[#213842]"></div>
        {isHomePage && <Title title="Product Reviews" className="text-[#4D533C]" />}

        <div className="pb-[8.75rem] mt-12 max-[768px]:mt-[6rem]">
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
            {testimonialData.map((info, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    src={pen1}
                    alt="clients review card"
                    weight={306}
                    height={420}
                  />
                  <Card
                    text={info.text}
                    title={info.title}
                    className="bg-white shadow-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Cards;
