import btn1 from '../public/images/btn1.png'
import Image from 'next/image';
import Title from './globalComponents/Title'

const VisitShop = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-[11%] py-[100px]">
      <Title title="Visit Our Shop" />
      <p className="text-center text-[#213842] text-[16px] font-normal">
        Our Personal Diffuser is an aromatherapy device that contains a blend of
        melatonin, lavender, and chamomile. A <br /> few breaths of our
        plant-based essential oil mist will mellow you out, quiet the mind, and
        lull you to bed.
      </p>
      <Image src={btn1} alt="shop button" />
    </div>
  );
}

export default VisitShop