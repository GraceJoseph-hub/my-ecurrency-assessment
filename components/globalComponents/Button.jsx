import React from 'react'

const Button = ({text, className}) => {
  return <div className={`bg-[#FC5959] py-2 rounded-md cursor-pointer w-[225px] text-white text-center ${className}`}>{text}</div>;
}

export default Button