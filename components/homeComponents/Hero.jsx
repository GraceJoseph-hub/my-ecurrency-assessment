import Image from "next/image";
import google from '../../public/images/google.png'
import forbes from '../../public/images/forbes.png'
import bloomberg from '../../public/images/bloomberg.png'
import sleepReview from '../../public/images/sleepReview.png'
import influencive from '../../public/images/influencive.png'



const Hero = ({
  backgroundImage,
  backgroundColor,
  imageSrc,
  altText,
  showImage,
  children,
  className
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
      {showImage && (
        <div className="absolute top-[47.75rem] right-0 w-[80%] bg-white py-6 px-10 shadow-2xl">
          <div className="flex justify-between sm:flex-wrap">
            <Image src={google} alt="Google icon" />
            <Image src={forbes} alt="Forbes icon" />
            <Image src={bloomberg} alt="Bloomberg icon" />
            <Image src={sleepReview} alt="Sleep review" />
            <Image src={influencive} alt="Influensive" />
          </div>
        </div>
      )}
      {backgroundColor && (
        <div className="absolute top-[30%] left-[11%]">{children}</div>
      )}
    </div>
  );
};

export default Hero