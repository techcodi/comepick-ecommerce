import { useEffect } from "react";
import { useState } from "react";
import FeatureBanner from "../../ui/FeatureBanner";
import PromoCards from "../../ui/PromoCards";
import TopBrands from "../../ui/TopBrands";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import ProductsDisplay from "../features/Products/ProductsDisplay";
import Hero from "./Hero";

function UserApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loader />;
  return (
    <>
      <Hero />
      <ProductsDisplay />
      <FeatureBanner />
      <PromoCards />
      <TopBrands />
      <Footer />
    </>
  );
}

export default UserApp;
