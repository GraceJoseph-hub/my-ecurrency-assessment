import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/shop", name: "Shop" },
    { path: "/faqs", name: "FAQS" },
  ];


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const isActive = (path) => router.pathname === path;
  return (
    <div className="absolute top-0 left-0 flex items-center gap-[10.625rem] py-4 px-[11.5%] z-50">
      <div>
        <Image src={logo} alt="sleepstiq logo" width={92} height={62} />
      </div>
      {/* desktop screen */}
      <nav className="hidden md:flex justify-between w-[391px]">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={`${link.name}-${index}`}
            className={`${
              isActive(link.path) ? "text-[#12305B] font-bold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* mobile screen */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 z-40">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={`${link.name}-${index}`}
              className={`${
                isActive(link.path) ? "text-[#12305B] font-bold" : ""
              }`}
              onClick={toggleMenu} // Close menu when a link is clicked
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
