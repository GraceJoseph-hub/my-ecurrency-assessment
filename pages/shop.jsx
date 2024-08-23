import Hero from "@/components/homeComponents/Hero";
import Layout from "@/components/Layout";
import mainBg2 from '../public/images/mainBg2.png'
import AboutProduct from "@/components/shopComponents/AboutProduct";
import ClientsReviews from "@/components/globalComponents/ClientsReviews";
import BannerText from "@/components/globalComponents/BannerText";

const shop = () => {
  return (
    <Layout>
      <Hero backgroundImage={mainBg2} altText="Hero banner" showImage={false}>
        <BannerText
          isParaTwo={false}
          isBtn={false}
        />
      </Hero>
      <AboutProduct />
      <ClientsReviews className="pt-[2rem] pb-[5rem] border-t" />
    </Layout>
  );
};

export default shop;
