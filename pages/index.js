import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import HappyCustomers from "@/components/HappyCustomers";
import ClientsReviews from "@/components/ClientsReviews";
import Product from "@/components/Product";
import Mission from "@/components/Mission";
import VisitShop from "@/components/VisitShop";
import HorizontalRule from "@/components/globalComponents/HorizontalRule";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <Layout>
      {/* <div > */}
      <Hero />
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
