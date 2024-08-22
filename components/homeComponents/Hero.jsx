import Image from "next/image";



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
        <div className="absolute top-[43.75rem] left-[6.438rem]">
          <Image src={imageSrc} alt={altText} />
        </div>
      )}
      {backgroundColor && (
        <div className="absolute top-[30%] left-[11%]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Hero