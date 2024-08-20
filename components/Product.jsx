import Image from "next/image"
import sleepkit from '../public/images/sleepkit.png'
import btn1 from '../public/images/btn1.png'
import Title from "./globalComponents/Title";

const Product = () => {
  return (
    <div className="flex pl-[1.5%]">
      <div className="h-[580px] w-[775px]">
        <Image src={sleepkit} alt="sleep kit" height={580} width={775} />
      </div>
      <div className="flex flex-col gap-8 pt-24">
        <Title title="Shop Now"/>
        <div className="">
          <p className="text-[#213842] w-[421px] text-[16px] font-normal">
            Our Personal Diffuser is an aromatherapy device <br /> that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based <br /> essential oil mist will mellow you out, quiet the mind, <br />
            and lull you to bed.
          </p>
        </div>
        <div>
          <Image src={btn1} alt="shop button" />
        </div>
      </div>
    </div>
  );
}

export default Product