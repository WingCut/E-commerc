import React from "react";
import images from "../../utils/images";
import "../../styles/HomePage.scss";
import {
  FilterView,
  Preloader,
  ProductList,
  Title,
} from "../../components/common";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";
import { FilterContext } from "../../context/filterContext";

const HomePage = () => {
  const { productsLoading } = useContext(ProductContext);
  const { filtered_products } = useContext(FilterContext);
  return (
    <main className="bg-secondary">
      <section className="sc-banner">
        <div className="banner-item h-100 img-cover">
          <img src={images.banner_1} alt="banner image" className="img-cover" />
        </div>
      </section>
      <section className="sc-wrapper py-5">
        <Title title={"Our Products "} />
        {productsLoading ? (
          <Preloader />
        ) : (
          <div>
            <FilterView />
            <br /> <br />
            <ProductList products={filtered_products} />
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
