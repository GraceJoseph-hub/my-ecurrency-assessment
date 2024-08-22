import Image from "next/image"
import sleepkit2 from '../../public/images/sleepkit2.svg'
import buyBtn from '../../public/images/buyBtn.png'
import priceImg from '../../public/images/priceImg.png'
import unitImg from '../../public/images/unitImg.png'

const AboutProduct = () => {
  return (
    <div className="relative px-[11%] pt-[8%] pb-[12%]">
      <Image src={sleepkit2} alt="sleep kit" width={1101} height={519} />
      <div className="absolute flex flex-col gap-8 left-[59%] top-[69%]">
        <div className="flex gap-12">
          <Image src={priceImg} alt="Price image in usd"/>
          <Image src={unitImg} alt="Unit price image"/>
        </div>
        <Image src={buyBtn} alt="Buy button" />
      </div>
    </div>
  );
}

export default AboutProduct