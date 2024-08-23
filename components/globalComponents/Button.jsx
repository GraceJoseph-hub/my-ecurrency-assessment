

const Button = ({text, className}) => {
  return (
    <div
      className={`bg-[#FC5959] py-2 rounded-md cursor-pointer max-w-[225px] font-Poppins text-white text-center ${className}`}
    >
      {text}
    </div>
  );
}

export default Button