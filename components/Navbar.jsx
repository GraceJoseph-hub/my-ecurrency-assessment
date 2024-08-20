import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 flex items-center gap-[10.625rem] py-4 px-[11.5%] z-50">
      <div>
        <Image src={logo} alt="sleepstiq logo" width={92} height={62} />
      </div>
      <nav className="flex justify-between w-[391px]">
        <Link href="/"> home </Link>
        <Link href="/about"> about</Link>
        <Link href="/shop"> shop </Link>
        <Link href="/faqs"> faqs </Link>
      </nav>
    </div>
  );
};

export default Navbar;
