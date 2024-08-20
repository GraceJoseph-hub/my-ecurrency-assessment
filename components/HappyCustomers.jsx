import Image from "next/image"
import group5 from '../public/images/group5.png'

const HappyCustomers = () => {
  return (
    <div>
      <div className="px-[11%] pt-[9.75rem]">
        <Image src={group5} alt="Happy customers" />
      </div>
    </div>
  );
}

export default HappyCustomers