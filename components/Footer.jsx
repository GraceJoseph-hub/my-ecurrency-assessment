import Image from "next/image";
import Link from "next/link";
import logoTop from "../public/images/logoTop.png";
import logoBottom from "../public/images/logoBottom.png";
import fbIcon from "../public/images/fbIcon.png";
import xIcon from "../public/images/xIcon.png";
import gIcon from "../public/images/gIcon.png";
import linkedInIcon from "../public/images/linkedInIcon.png";

const Footer = () => {

  const links = [
    { path: "/bout", name: "About" },
    { path: "/", name: "Blog" },
    { path: "/", name: "Contact" },
    { path: "/", name: "Jobs" },
  ];


  return (
    <footer className="relative bg-[#043C50] py-12 text-white text-sm">
      {/* Logo Section */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="text-center">
          <Image src={logoTop} alt="logo" />
          <Image src={logoBottom} alt="logo" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 px-8 mt-[7rem]">
        {/* Company Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold mb-2">COMPANY</h2>
          <ul>
            {links.map((link, index) => (
              <li className="mb-2" key={index}>
                <Link href="#" className="text-[#ABABAB]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold mb-2">CONTACT</h2>
          <div>
            <p className="mb-2 text-[#ABABAB]">Phone</p>
            <p className="font-semibold">+234 708 507 3128</p>
          </div>
          <div>
            <p className="mb-2 text-[#ABABAB]">Address</p>
            <p className="font-semibold">16, Oginjope Close, Upston Close</p>
          </div>
        </div>

        {/* Consumer Advisory Section */}
        <div className="flex flex-col space-y-2 max-w-md">
          <h2 className="font-bold mb-2">CONSUMER ADVISORY</h2>
          <p className="text-sm">
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. This product should be used only as
            directed on the label. All trademarks and copyrights are property of
            their respective owners and not affiliated with nor do they endorse
            this product. Results may vary.
          </p>
          <p className="">
            By using our website or product, you agree to follow our
          </p>
          <Link href="/" className=" text-blue-500">
            terms of service.
          </Link>
        </div>

        {/* Get in Touch Section */}
        <div>
          <div className="flex flex-col space-y-4 border-l pl-8">
            <h3 className="font-bold mb-2">GET IN TOUCH</h3>
            <p className="text-[#ABABAB]">
              Feel free to get in touch with us <br /> via email
            </p>
            <p className="font-bold text-2xl">hello@sleepstiq.com</p>
            <div className="flex space-x-4">
              <Image src={fbIcon} alt="Facebook Icon" />
              <Image src={xIcon} alt="X Icon" />
              <Image src={gIcon} alt="G Icon" />
              <Image src={linkedInIcon} alt="LinkedIn Icon" />
            </div>
          </div>
          <p className="text-[#ABABAB] pt-4 pl-8">
            © 2020@sleepstiq. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
