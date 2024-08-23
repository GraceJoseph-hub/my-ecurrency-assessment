import Image from "next/image";
import sleeper from '../../public/images/sleeper.png'
import Title from "../globalComponents/Title";
import Button from "../globalComponents/Button";
import SmallCard from "../globalComponents/SmallCard";


const Product = () => {
  // 
  return (
    <div className="flex flex-col items-center w-full pt-[2rem] pb-[5rem] lg:flex-row max-[768px]:pt-0 font-Poppins">
      <div className="relative">
        <div className="h-full w-[full">
          <Image src={sleeper} alt="sleep kit" height={580} width={775} />
        </div>
        <div className="absolute bg-white left-[43%] top-[75%] rounded-md shadow-2xl px-4 py-6 max-[500px]:hidden">
          <SmallCard className="max-[500px]:text-sm max-[500px]:w-[250px]" />
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-24 max-[768px]:pl-[11%]">
        <Title title="Shop Now" />
        <div className="">
          <p className="text-[#213842] max-w-[421px] text-[16px] font-normal">
            Our Personal Diffuser is an aromatherapy device <br /> that contains
            a blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based <br /> essential oil mist will mellow you out, quiet the
            mind, <br />
            and lull you to bed.
          </p>
        </div>
        <Button text="Visit Shop" />
      </div>
    </div>
  );
};

export default Product;
