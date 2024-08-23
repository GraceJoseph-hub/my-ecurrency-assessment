import Hero from "@/components/homeComponents/Hero";
import Layout from "@/components/Layout";
import banner from "../public/images/banner.png";
import AboutProduct from "@/components/shopComponents/AboutProduct";
import ClientsReviews from "@/components/globalComponents/ClientsReviews";

const shop = () => {
  return (
    <Layout>
      <Hero backgroundImage={banner} altText="Hero banner" showImage={false} />
      <AboutProduct />
      <ClientsReviews className="pt-[2rem] pb-[5rem] border-t" />
    </Layout>
  );
};

export default shop;
