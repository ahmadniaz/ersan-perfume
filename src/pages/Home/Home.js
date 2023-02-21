import FirstHeader from "../../components/layout/Header-1/Header-1";
import SecondHeader from "../../components/layout/Header-2/Header-2";
import HeroSection from "../../components/hero/Hero";
import ProductGrid from "../../components/product-grid/productGrid";
import FirstFooter from "../../components/layout/Footer-1/Footer-1";
import SecondFooter from "../../components/layout/Footer-2/Footer-2";

const Home = () => {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <HeroSection />
      <ProductGrid />
      <FirstFooter />
      <SecondFooter />
    </>
  );
};

export default Home;
