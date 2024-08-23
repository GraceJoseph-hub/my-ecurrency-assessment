import { useState } from "react"
import faqData from "./faqData"

const FaqQuestions = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const handleFAQClick = (id) => {
    setSelectedFAQ(selectedFAQ === id ? null : id);
  };
  
  return (
    <div className="flex gap-[80px] px-[5%] py-16">
      <div className="flex flex-col gap-5 text-lg text-[#12305B]">
        <p className="font-bold">
          Sleepstiq <span className="bg-[#FFD7231A] py-2 pr-8">Product</span>
        </p>
        <p>Order</p>
        <p>Melantonin</p>
      </div>
      <div className="flex-1">
        {faqData.map((faq, index) => (
          <div key={faq.id}>
            <button
              className={`${
                index === 0 ? "border-t border-b" : "border-b"
              } w-full text-left text-[#12305B] text-lg cursor-pointer py-3`}
              onClick={() => handleFAQClick(faq.id)}
            >
              {faq.question}
            </button>
            {selectedFAQ === faq.id && (
              <p className="py-2 text-[#000000] text-xs">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqQuestions