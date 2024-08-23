import Image from "next/image";
import sleeper from "../../public/images/sleeper.png";
import Title from "../globalComponents/Title";
import SmallCard from "../globalComponents/SmallCard";
import Button from "../globalComponents/Button";

const AboutProduct = () => {
  return (
    <div className="flex justify-center items-center pt-[8%] pb-[12%] max-[748px]:flex-col">
      <div className="w-1/2">
        <Image src={sleeper} alt="sleep kit" width={1101} height={519} />
      </div>
      <div className="flex flex-col gap-[2rem] w-1/2 mt-[4rem]">
        <Title title="About Product" />
        <p className="text-[#213842]">
          Our Personal Diffuser is an aromatherapy device <br /> that contains a
          blend of melatonin, lavender, and <br /> chamomile. A few breaths of
          our plant-based <br /> essential oil mist will mellow you out, quiet
          the mind, <br />
          and lull you to bed.
        </p>

        <SmallCard />

        <div className="flex flex-col gap-2">
          <div className="flex gap-[5.1rem]">
            <p>Price</p> <span>unit</span>
          </div>
          <div className="flex gap-16">
            <p className="text-[#000000] font-semibold">USD 50</p>
            <input
              type="number"
              placeholder="2"
              className="border w-[63px] px-2 outline-none font-semibold "
            />
          </div>
        </div>

        <Button text="Buy" />
      </div>
    </div>
  );
};

export default AboutProduct;
