import Image from "next/image"
import group4 from '../../public/images/group4.png'

const ClientsReviews = ({className}) => {
  return (
    <div className={`pl-[11%] pb-[8.75rem] ${className}`}>
      <Image src={group4} alt="Clients reviews" />
    </div>
  );
}

export default ClientsReviews