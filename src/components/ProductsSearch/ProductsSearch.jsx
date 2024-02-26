import React from "react";
import { FaSearch, FaSearchengin } from "react-icons/fa";

const ProductsSearch = () => {
  return (
    <form className="text-secondary bg-white flex w-full px-7 py-5 gap-4 items-center shadow-md">
      <FaSearch className="text-2xl text-secondary" />
      <input
        type="text"
        name="productSearch"
        id="productSearch"
        placeHolder='Search Products...'
        className="w-full font-semibold text-xl"
      />
    </form>
  );
};

export default ProductsSearch;
