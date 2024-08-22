import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import banner from '../public/images/banner.png'
import AboutProduct from '@/components/shopComponents/AboutProduct';
import HorizontalRule from '@/components/globalComponents/HorizontalRule';
import ClientsReviews from '@/components/globalComponents/ClientsReviews';

const shop = () => {
  return (
    <Layout>
      <Hero
        backgroundImage={banner}
        altText="Hero banner"
        showImage={false}
      />
      <AboutProduct />
      <HorizontalRule className="pt-0" />
      <ClientsReviews className="pt-[2rem] pb-[5rem]"/>
    </Layout>
  );
}

export default shop