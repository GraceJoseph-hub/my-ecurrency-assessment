import Hero from "@/components/homeComponents/Hero";
import Layout from "@/components/Layout";
import HappyCustomers from "@/components/homeComponents/HappyCustomers";
import ClientsReviews from "@/components/globalComponents/ClientsReviews";
import Product from "@/components/homeComponents/Product";
import Mission from "@/components/homeComponents/Mission";
import VisitShop from "@/components/homeComponents/VisitShop";
import Cards from "@/components/homeComponents/Cards";;
import mainBg from '../public/images/mainBg.png'
import BannerText from "@/components/globalComponents/BannerText";
import Slider from "@/components/globalComponents/Slider";

export default function Home() {
  return (
    <Layout>
      <Hero backgroundImage={mainBg} altText="Hero banner" showImage={true}>
        <BannerText
          isParaTwo={true}
          paraTwo="With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep."
          isBtn={true}
        />
      </Hero>
      <HappyCustomers />
      <Slider />
      {/* <ClientsReviews /> */}
      <Product />
      <Mission />
      <VisitShop />
      <Cards />
    </Layout>
  );
}
