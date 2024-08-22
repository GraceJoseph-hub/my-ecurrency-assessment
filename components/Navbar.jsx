import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/images/logo.png";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;
  return (
    <div className="absolute top-0 left-0 flex items-center gap-[10.625rem] py-4 px-[11.5%] z-50">
      <div>
        <Image src={logo} alt="sleepstiq logo" width={92} height={62} />
      </div>
      <nav className="flex justify-between w-[391px]">
        <Link href="/">
          {" "}
          <span className={isActive("/") ? "text-[#12305B] font-bold" : ""}>
            home
          </span>{" "}
        </Link>
        <Link href="/about">
          {" "}
          <span
            className={isActive("/about") ? "text-[#12305B] font-bold" : ""}
          >
            about
          </span>
        </Link>
        <Link href="/shop">
          <span className={isActive("/shop") ? "text-[#12305B] font-bold" : ""}>
            shop
          </span>
        </Link>
        <Link href="/faqs">
          {" "}
          <span className={isActive("/faqs") ? "text-[#12305B] font-bold" : ""}>
            FAQS
          </span>{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
