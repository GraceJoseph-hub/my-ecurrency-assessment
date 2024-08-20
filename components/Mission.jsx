import Image from "next/image"
import mission from '../public/images/mission.png'

const Mission = () => {
  return (
    <div className='pl-[11%] pt-8'>
      <Image src={mission} alt="mission statement" width={1268} height={550}/>
    </div>
  )
}

export default Mission