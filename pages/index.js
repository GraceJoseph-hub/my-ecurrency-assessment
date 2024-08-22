import Hero from "@/components/homeComponents/Hero";
import Layout from "@/components/Layout";
import HappyCustomers from "@/components/homeComponents/HappyCustomers";
import ClientsReviews from "@/components/globalComponents/ClientsReviews";
import Product from "@/components/homeComponents/Product";
import Mission from "@/components/homeComponents/Mission";
import VisitShop from "@/components/homeComponents/VisitShop";
import HorizontalRule from "@/components/globalComponents/HorizontalRule";
import Cards from "@/components/homeComponents/Cards";
import heroBg from "../public/images/heroBg.png";
import group3 from "../public/images/group3.png";

export default function Home() {
  return (
    <Layout>
      {/* <div > */}
      <Hero
        backgroundImage={heroBg}
        imageSrc={group3}
        altText="Hero banner"
        showImage={true}
      />
      <HappyCustomers />
      <ClientsReviews />
      <Product />
      <Mission />
      <VisitShop />
      <HorizontalRule />
      {/* Check the cards and the one in the design. The widths are not aligning. */}
      <Cards />
      {/* </div> */}
    </Layout>
  );
}
