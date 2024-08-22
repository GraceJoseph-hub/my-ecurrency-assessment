import Image from 'next/image';
import Title from '../globalComponents/Title';
import searchIcon from '../../public/images/searchIcon.png'

const Search = () => {
  return (
    <div className="flex flex-col gap-8">
      <p>We're here to help you</p>
      <Title
        title="How can we assist?"
        className="font-semibold text-[60px] text-[#12305B]"
      />
      <div className="flex items-center gap-5 w-[48rem] bg-white px-10 py-3 mt-2 rounded-md">
        <Image src={searchIcon} alt="search icon" />
        <input
          type="search"
          placeholder="Search FAQs here"
          name=""
          id=""
          className="text-lg text-[background: #12305B] outline-none"
        />
      </div>
    </div>
  );
}

export default Search