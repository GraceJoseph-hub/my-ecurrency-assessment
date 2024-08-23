import Image from "next/image"
import sleepWoman from '../../public/images/sleepWoman.png'
import Title from "../globalComponents/Title";


const Mission = () => {
  return (
    <div className="flex gap-20 pl-[11%] pt-8">
      <div className="flex flex-col gap-10 mt-10">
        <Title title="Our Mission" />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>
          We started Sleepstiq with 1 simple goal: to be your best friend at
          bedtime. We, just like you, deal with stress, unease, and trouble
          sleeping from a number of silly things like school, work, screens,
          numbers, and people. That's why we created products that aim to
        </p>
        <div>
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
      <Image src={sleepWoman} alt="mission statement" />
    </div>
  );
}

export default Mission