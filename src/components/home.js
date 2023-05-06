import React from "react";
import { CartState } from "../context/context";
import SingleProduct from "./singleProduct";
import "./styles.css";
import Filters from "./filters";

function Home() {
  const {
    state: { products },
    productState: { byStock, byRating, byFastDelivery, sort, searchQuery },
  } = CartState();
  console.log(products);
  const transformedProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filters />
      <div className="product-container">
        {transformedProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
