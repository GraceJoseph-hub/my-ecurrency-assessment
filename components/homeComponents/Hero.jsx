import Image from "next/image";
import google from "../../public/images/google.png";
import forbes from "../../public/images/forbes.png";
import bloomberg from "../../public/images/bloomberg.png";
import sleepReview from "../../public/images/sleepReview.png";
import influencive from "../../public/images/influencive.png";

const Hero = ({
  backgroundImage,
  backgroundColor,
  showImage,
  children,
  className,
}) => {
  return (
    <div
      className={`relative bg-cover h-[811px] w-full ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.src})`
          : "none",
        backgroundColor: backgroundColor || "transparent",
      }}
    >
      {backgroundImage && (
        <div className="absolute top-[30%] left-[11%]">{children}</div>
      )}
      {showImage && backgroundImage && (
        <div className="absolute -bottom-[12.8rem] right-0 w-[80%] grid grid-cols-1 gap-10 bg-white py-6 px-10 shadow-2xl md:-bottom-[4.8rem] md:grid-cols-2 lg:grid-cols-3 lg:-bottom-[3.8rem] xl:grid-cols-5 xl:-bottom-[2.75rem] ">
          <div className="w-full">
            <Image src={google} alt="Google icon" />
          </div>
          <div className="w-full">
            <Image src={forbes} alt="Forbes icon" />
          </div>
          <div className="w-full">
            <Image src={bloomberg} alt="Bloomberg icon" />
          </div>
          <div className="w-full">
            <Image src={sleepReview} alt="Sleep review" />
          </div>
          <div className="w-full">
            <Image src={influencive} alt="Influencive" />
          </div>
        </div>
      )}
      {!backgroundImage && backgroundColor && (
        <div className="absolute top-[30%] left-[11%]">{children}</div>
      )}
    </div>
  );
};

export default Hero;
