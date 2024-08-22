import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Search from '@/components/faqComponents/Search';

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
    </Layout>
  );
}

export default faqs