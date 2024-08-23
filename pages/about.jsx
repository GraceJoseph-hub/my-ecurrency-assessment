import Hero from '@/components/homeComponents/Hero'
import Layout from '@/components/Layout'
import mainBg from '../public/images/mainBg.png'
import BannerText from '@/components/globalComponents/BannerText'

const about = () => {
  return (
    <Layout>
      <Hero backgroundImage={mainBg} altText="Hero banner" showImage={false}>
        <BannerText
          isParaTwo={true}
          paraTwo="With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep."
          isBtn={true}
        />
      </Hero>
    </Layout>
  );
}

export default about