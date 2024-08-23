import Title from '../globalComponents/Title';
import Button from '../globalComponents/Button';

const VisitShop = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-[11%] py-[100px] font-Poppins">
      <Title title="Visit Our Shop" />
      <p className="text-center text-[#213842] text-[16px] font-normal font-Poppins">
        Our Personal Diffuser is an aromatherapy device that contains a blend of
        melatonin, lavender, and chamomile. A <br /> few breaths of our
        plant-based essential oil mist will mellow you out, quiet the mind, and
        lull you to bed.
      </p>
      <Button text="Visit Shop" className="px-10 py-2 font-Poppins" />
    </div>
  );
};

export default VisitShop;
