import Hero from "@/components/homeComponents/Hero";
import Layout from "@/components/Layout";
import mainBg2 from '../public/images/mainBg2.png'
import AboutProduct from "@/components/shopComponents/AboutProduct";
import BannerText from "@/components/globalComponents/BannerText";
import Cards from "@/components/homeComponents/Cards";

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
      <Cards isHomePage={false}/>
    </Layout>
  );
};

export default shop;
