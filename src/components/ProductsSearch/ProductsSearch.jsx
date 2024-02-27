import React from "react";
import { FaSearch } from "react-icons/fa";

const ProductsSearch = ({ setSearch }) => {
  return (
    <form onSubmit={(e)=>setSearch(e.target.value)} className="text-secondary bg-white flex w-full px-7 py-5 gap-4 items-center shadow-md">
      <FaSearch className="text-2xl text-secondary" />
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name="productSearch"
        id="productSearch"
        placeholder="Search Products..."
        className="w-full font-semibold text-xl outline-none"
      />
    </form>
  );
};

export default ProductsSearch;
