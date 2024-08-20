import React from 'react'

const Title = ({title, className}) => {
  return <h2 className={`font-bold text-4xl text-[#12305B] ${className}`}>{title}</h2>;
}

export default Title