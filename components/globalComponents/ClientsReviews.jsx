import Card from "./Card";
import cardData from "./cardData";

const ClientsReviews = ({className}) => {
  return (
    <div className={`pl-[11%] pb-[8.75rem] mt-12 bg-white ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5rem]">
        {cardData.map((info) => (
          <Card key={info.id} title={info.title} text={info.text} />
        ))}
      </div>
    </div>
  );
};

export default ClientsReviews;
