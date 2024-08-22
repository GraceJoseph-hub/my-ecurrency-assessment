import Image from "next/image";
import pen2 from '../../public/images/pen2.png'
import pen1 from '../../public/images/pen1.png'
import Title from "../globalComponents/Title";
import Card from "../globalComponents/Card";


const Cards = () => {
  return (
    <div className="flex flex-col gap-6 border-t pt-10 pl-[11%]">
      <Title title="Product Reviews" className="text-[#4D533C]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <Image
            src={pen1}
            alt="clients review card"
            weight={306}
            height={420}
          />
          <Card
            text="Works great! Just use it and then relax, I fall asleep with no problem every time I use it."
            title="Rachel Dill"
            className="bg-white shadow-lg"
          />
        </div>
        <div>
          <Image
            src={pen2}
            alt="clients review card"
            weight={306}
            height={420}
          />
          <Card
            text="It really helps me fall right to sleep compared to melatonin pills."
            title="Javier Mendez"
            className="bg-white shadow-lg"
          />
        </div>
        <div>
          <Image
            src={pen2}
            alt="clients review card"
            weight={306}
            height={420}
          />
          <Card
            text="I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now."
            title="Naomi Nwazurike"
            className="bg-white shadow-lg"
          />
        </div>
        <div>
          <Image
            src={pen2}
            alt="clients review card"
            weight={306}
            height={420}
          />
          <Card
            text="Works great! Just use it and then relax, I fall asleep with no problem every time I use it."
            title="Rachel Dill"
            className="bg-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
