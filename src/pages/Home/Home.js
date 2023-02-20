import FirstHeader from "../../components/layout/Header-1/Header-1";
import SecondHeader from "../../components/layout/Header-2/Header-2";
import HeroSection from "../../components/hero/Hero";
import ProductGrid from "../../components/product-grid/productGrid";

const Home = () => {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <HeroSection />
      <ProductGrid />
    </>
  );
};

export default Home;
