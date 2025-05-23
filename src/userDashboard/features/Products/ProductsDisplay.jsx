import { productsList } from "./Products";
import Loader from "../../components/Loader";
import "./ProductDisplay.css";
import ProductList from "./ProductList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCategories from "./ProductCategories";

function ProductsDisplay() {
  const { products, isLoading } = productsList();

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="trending_container">
        <h2>Trending</h2>
        <Swiper
          className="shop-swiper-wrapper"
          spaceBetween={10}
          slidesPerView={2.5}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductList product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProductCategories />
    </div>
  );
}

export default ProductsDisplay;
