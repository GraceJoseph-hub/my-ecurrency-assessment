// import Image from "next/image"
// import group4 from '../../public/images/group4.png'
// import Card from "./Card";
// import cardData from "./cardData";

// const ClientsReviews = ({className}) => {
//   return (
//     <div className={`pl-[11%] pb-[8.75rem] ${className}`}>
//       {cardData.map((info) => (
//         <div key={info.id}>
//           <Card title={info.title} text={info.text} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ClientsReviews

import Card from "../globalComponents/Card";
import cardData from "../globalComponents/cardData";

const ClientsReviews = () => {
  return (
    <div className="pl-[11%] pb-[8.75rem] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5rem]">
        {cardData.map((info) => (
          <Card key={info.id} title={info.title} text={info.text} />
        ))}
      </div>
    </div>
  );
};

export default ClientsReviews;
