import Button from './Button';

const BannerText = ({ paraTwo, isParaTwo, isBtn}) => {
  return (
    <div>
      <p className="text-[#12305B]">We're here to help you</p>
      <h1 className="text-[60px] font-bold">Relax & Rest</h1>
      {isParaTwo && <p className='mb-4'>{paraTwo}</p>}
      {isBtn && <Button text="View Shop" />}
    </div>
  );
}

export default BannerText