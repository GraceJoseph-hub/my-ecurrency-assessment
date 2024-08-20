import Image from "next/image";
import group3 from '../public/images/group3.png'


const Hero = () => {
  return (
    <div className="relative bg-[url('../public/images/heroBg.png')] bg-cover h-[811px] w-full">
      <div className="absolute top-[43.75rem] left-[6.438rem]">
        <Image src={group3} />
      </div>
    </div>
  );
}

export default Hero