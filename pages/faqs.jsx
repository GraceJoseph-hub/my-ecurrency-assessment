import Layout from "@/components/Layout";
import Hero from "@/components/homeComponents/Hero";
import Search from "@/components/faqComponents/Search";
import FaqQuestions from "@/components/faqComponents/FaqQuestions";

const faqs = () => {
  return (
    <Layout>
      <Hero
        backgroundColor=" #FBF9F2"
        altText="Background color"
        showImage={false}
        className="h-[596px]"
      >
        <Search />
      </Hero>
      <FaqQuestions />
    </Layout>
  );
};

export default faqs;
