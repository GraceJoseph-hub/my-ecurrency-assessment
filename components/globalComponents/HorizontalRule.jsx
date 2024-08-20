import Image from "next/image"
import rectangle from '../../public/images/rectangle.png'


const HorizontalRule = () => {
  return (
    <div className="py-10 px-[11%]">
      <Image src={rectangle} alt="horizontal rule" width={1110} height={1} />
    </div>
  );
}

export default HorizontalRule