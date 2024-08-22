import Image from "next/image";
import card1 from '../../public/images/card1.png'
import card2 from '../../public/images/card2.png'
import card3 from '../../public/images/card3.png'
import card4 from '../../public/images/card4.png'
import Title from "../globalComponents/Title";


const Cards = () => {
  return (
    <div className="pl-[11%]">
      <Title title="Product Reviews" className="text-[#4D533C]" />
      <div className="flex">
        <Image
          src={card1}
          alt="clients review card"
          weight={306}
          height={420}
        />
        <Image
          src={card2}
          alt="clients review card"
          weight={306}
          height={420}
        />
        <Image
          src={card3}
          alt="clients review card"
          weight={306}
          height={420}
        />
        <Image
          src={card4}
          alt="clients review card"
          weight={306}
          height={420}
        />
      </div>
    </div>
  );
};

export default Cards;
