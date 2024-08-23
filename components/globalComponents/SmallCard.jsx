const SmallCard = ({className}) => {
  return (
    <div
      className={`flex flex-col gap-2 text-[#4D533C] font-Poppins ${className}`}
    >
      <p>
        😊 <span className="italic ml-4">Promotes calm and relaxation.</span>
      </p>

      <p>
        💤
        <span className="italic ml-4">
          Inhalation allows for a rapid effect.
        </span>
      </p>
      <div>
        ✅
        <span className="italic ml-3">
          100% drug-free, plant-based ingredients.
        </span>
        <p className="italic ml-9 mt-[1px]">3rd-party lab tested.</p>
      </div>
    </div>
  );
}

export default SmallCard