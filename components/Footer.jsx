import Image from "next/image"
import footer from '../public/images/footer.png'

const Footer = () => {
  return (
    <div>
      <Image src={footer} alt="footer"/>
    </div>
  )
}

export default Footer