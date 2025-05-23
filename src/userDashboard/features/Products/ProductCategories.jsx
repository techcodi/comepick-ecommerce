import { useNavigate } from "react-router-dom";
import { categoryList } from "./CategoryApi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

function ProductCategories() {
  const { data: categories } = categoryList();
  const navigate = useNavigate();

  return (
    <>
      <div className="category-container">
        <h2>Shop by categories</h2>
        <Swiper
          spaceBetween={8}
          slidesPerView={4.5}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 7,
            },
            1024: {
              slidesPerView: 10,
            },
          }}
        >
          {categories?.map((category) => (
            <SwiperSlide key={category.id}>
              <button
                className="category-item"
                onClick={() => navigate(`/category/${category.name}`)}
              >
                {category.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flexbox for larger screens */}
        <div className="category-flex-container">
          {categories?.map((category) => (
            <button
              key={category.id}
              className="category-item"
              onClick={() => navigate(`/category/${category.name}`)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductCategories;
