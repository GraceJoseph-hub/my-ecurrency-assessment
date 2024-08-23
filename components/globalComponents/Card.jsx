import star from "../../public/images/star.png";
import Image from "next/image";

const Card = ({ text, title, className }) => {
  return (
    <div className={`text-[#FBF9F2]  bg-[#FBF9F2] px-4 py-4 ${className}`}>
      <div className="flex flex-col gap-5 max-[768px]:justify-between max-[768px]:h-full">
        <p className="text-[#4D533C] text-base italic">{text}</p>
        <div>
          <p className="text-[#4D533C] font-bold">{title}</p>
          <div className="flex">
            {Array(1)
              .fill()
              .map((_, index) => (
                <Image
                  key={index}
                  src={star}
                  alt="star icon"
                  className="mr-1"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
