import Image from "next/image"
import sleepWoman from '../../public/images/sleepWoman.png'
import Title from "../globalComponents/Title";


const Mission = () => {
  return (
    <div className="flex gap-20 pl-[11%] pt-8 max-[768px]:flex-col font-Poppins">
      <div className="flex flex-col gap-10 mt-10 max-[768px]:pr-[10%]">
        <Title title="Our Mission" />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="font-Poppins">
          We started Sleepstiq with 1 simple goal: to be your best friend at
          bedtime. We, just like you, deal with stress, unease, and trouble
          sleeping from a number of silly things like school, work, screens,
          numbers, and people. That&apos;s why we created products that aim to
        </p>
        <div className="font-Poppins">
          <div className="flex gap-3">
            <span>✓</span>
            <p>Promote</p>
          </div>
          <div className="flex gap-3">
            <span>✓</span>
            <p>Calm</p>
          </div>
          <div className="flex gap-3">
            <span>✓</span>
            <p>Reduce Stress</p>
          </div>
          <div className="flex gap-3">
            <span>✓</span>
            <p>Aid Relaxation</p>
          </div>
        </div>
      </div>
      <Image
        src={sleepWoman}
        alt="mission statement"
        width={735}
        height={550}
        className="max-[1200px]:w-[500px] max-[900px]:w-[300px] max-[768px]:w-auto"
      />
    </div>
  );
}

export default Mission