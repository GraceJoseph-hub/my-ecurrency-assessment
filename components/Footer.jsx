import Image from "next/image";
import Link from "next/link";
import logoTop from "../public/images/logoTop.png";
import logoBottom from "../public/images/logoBottom.png";
import fbIcon from "../public/images/fbIcon.png";
import xIcon from "../public/images/xIcon.png";
import gIcon from "../public/images/gIcon.png";
import linkedInIcon from "../public/images/linkedInIcon.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#043C50] pt-[12%] text-white">
      <div className="absolute top-5 left-[49%]">
        <div className="">
          <Image src={logoTop} alt="logo" />
          <Image src={logoBottom} alt="logo" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div>
          <h2 className="font-bold mb-4">COMPANY</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-4">CONTACT</h2>
          <p className="mb-2">Phone</p>
          <p className="font-semibold mb-4">+234 708 507 3128</p>
          <p className="mb-2">Address</p>
          <p className="font-semibold">16, Oginjope Close, Upston Close</p>
        </div>

        <div>
          <h2 className="font-bold mb-4">CONSUMER ADVISORY</h2>
          <p className="text-sm">
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. This product should be used only as
            directed on the label. All trademarks and copyrights are property of
            their respective owners and not affiliated with nor do they endorse
            this product. Results may vary.
          </p>
        </div>

        <div className="flex flex-col border-l pl-[3rem] pb-4">
          <h3>GET IN TOUCH</h3>
          <div className="flex flex-col gap-5">
            <p className="text-[#ABABAB]">
              Feel free to get in touch with us <br /> vai email
            </p>
            <p className="font-bold text-2xl">hello@sleepstiq.com</p>
            <div className="flex gap-4">
              <Image src={fbIcon} alt="Facebook Icon" />
              <Image src={xIcon} alt="X Icon" />
              <Image src={gIcon} alt="G Icon" />
              <Image src={linkedInIcon} alt="LinkedIn Icon" />
            </div>
            <p className="pl-[3rem] pt-4 text-[#ABABAB]">
              © 2020@sleepstiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          By using our website or product, you agree to follow our terms of service.
        </p>
        <p className="text-sm mt-4 md:mt-0">
          &copy; 2020 sleepstiq, All Rights Reserved.
        </p>
      </div> */}

      {/* <div className="container mx-auto mt-8 flex justify-center md:justify-end">
        <a
          href="mailto:hello@sleepstiq.com"
          className="font-semibold hover:underline mr-4"
        >
          hello@sleepstiq.com
        </a>
        <div className="flex space-x-4">
          <a href="#">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-google text-xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

// import Image from "next/image"
// import Link from "next/link"
// import logoTop from '../public/images/logoTop.png'
// import logoBottom from '../public/images/logoBottom.png'
// import fbIcon from '../public/images/fbIcon.png'
// import xIcon from '../public/images/xIcon.png'
// import gIcon from '../public/images/gIcon.png'
// import linkedInIcon from '../public/images/linkedInIcon.png'

// const Footer = () => {
//   return (
//     <div className="relative flex flex-col justify-center w-full bg-[#043C50] text-white px-[3%] py-[3%] text-xs">
//       <div className="absolute top-5 left-[49%]">
//         <div className="w-[134.02px]">
//           <Image src={logoTop} alt="logo" />
//           <Image src={logoBottom} alt="logo" />
//         </div>
//       </div>
//       <div className="flex justify-between items-center mt-[8%]">
//         <div className="flex flex-col gap-[5rem]">
//           <h3>COMPANY</h3>
//           <div className="flex flex-col gap-5 text-[#ABABAB] mt-[-25px]">
//             <Link href="./">About</Link>
//             <Link href="./">Blog</Link>
//             <Link href="./">Contact</Link>
//             <Link href="./">Jobs</Link>
//           </div>
//         </div>
//         <div className="flex flex-col gap-[4rem]">
//           <h3>CONTACT</h3>
//           <div className="flex flex-col gap-5">
//             <p className="text-[#ABABAB]">Phone</p>
//             <p>+234 708 507 3128</p>
//             <p className="text-[#ABABAB]">Address</p>
//             <p>16, Ogindipe Close, Upston Close</p>
//           </div>
//         </div>
//         <div className="">
//           <h3>CONSUMER ADVISORY</h3>
//           <div className="flex flex-col gap-8">
//             <p className="mt-[10%]">
//               These statements have not been evaluated by the Food <br /> and
//               Drug Administration. This product is not intended to <br />{" "}
//               diagnose, treat, cure, or prevent any disease. This product <br />{" "}
//               should be used only as directed on the label. All <br />{" "}
//               trademarks and copyrights are property of their <br /> respective
//               owners and not affiliated with nor do they <br /> endorse this
//               product. Results may vary.
//             </p>
//             <div>
//               <p>By using our website or product, you agree to follow our</p>
//               <Link href="./">terms of service.</Link>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex flex-col gap-5 border-l pl-[3rem] pb-4">
//             <h3>GET IN TOUCH</h3>
//             <div className="flex flex-col gap-5">
//               <p className="text-[#ABABAB]">
//                 Feel free to get in touch with us <br /> vai email
//               </p>
//               <p className="font-bold text-2xl">hello@sleepstiq.com</p>
//               <div className="flex gap-4">
//                 <Image src={fbIcon} alt="Facebook Icon" />
//                 <Image src={xIcon} alt="X Icon" />
//                 <Image src={gIcon} alt="G Icon" />
//                 <Image src={linkedInIcon} alt="LinkedIn Icon" />
//               </div>
//             </div>
//           </div>
//           <p className="pl-[3rem] pt-4 text-[#ABABAB]">
//             © 2020@sleepstiq. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer
