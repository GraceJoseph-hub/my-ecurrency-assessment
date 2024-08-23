import Link from "next/link";
import Image from "next/image"
import profilePic from '../../public/images/profilePic.png'
import eclipse from '../../public/images/eclipse.png'


const HappyCustomers = () => {
  return (
    <div className="flex flex-col w-full px-[11%] pt-[16rem] gap-[160px] md:py-[9.75rem] lg:flex-row">
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <p className="text-[#12305B] text-sm">Our Amazing Story</p>
        <div className="flex flex-col gap-[3rem]">
          <p className="text-4xl text-[#12305B] font-bold">
            10k+Happy Customers
          </p>
          <p className="text-base text-[#213842]">
            There&apos;s no secret sauce, no wizard behind the curtain. What
            makes Aerolab tick is an interdisciplinary team with a framework
            that fosters candid collaboration.
          </p>
        </div>
        <Link href="/" className="text-[#12305B] font-bold">
           More know About us
        </Link>
      </div>
      <div className="flex flex-col gap-[4rem] bg-[#FBF9F2] shadow-2xl px-8 py-6 w-full lg:w-1/2">
        <p className="text-2xl italic">
          I&apos;m a very anxious person but use this and feel so relaxed and
          sleep <br />
          way better now with the aid of sleepstiq.
        </p>
        <div className="flex gap-8">
          <Image src={profilePic} alt="James Miller" />
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[#4D533C] text-[22px] font-bold">
                James Miller
              </p>
              <p className="text-[#152934] text-base">CEO, Techbias</p>
            </div>
            <div className="flex gap-4 pl-12">
              <Image src={eclipse} alt="James Miller" />
              <Image src={eclipse} alt="James Miller" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HappyCustomers