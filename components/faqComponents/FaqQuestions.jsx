import { useState } from "react"
import faqData from "./faqData"

const FaqQuestions = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const handleFAQClick = (id) => {
    setSelectedFAQ(selectedFAQ === id ? null : id);
  };
  
  return (
    <div>
      {faqData.map((faq) => (
        <button
          key={faq.id}
          className="w-full text-left text-blue-600 hover:underline"
          onClick={() => handleFAQClick(faq.id)}
        >
          {faq.question}
        </button>
      ))}
    </div>
  );
}

export default FaqQuestions