"use client";

import React, { useEffect, useState } from "react";
import ProductsSearch from "../ProductsSearch/ProductsSearch";
import { CiMenuKebab } from "react-icons/ci";

const Products = () => {
  const [category, SetCategory] = useState([]);

  useEffect(() => {
    fetch("./Data/Category.json")
      .then((res) => res.json())
      .then((data) => SetCategory(data));
  }, []);

  return (
    <div className="bg-background border min-h-screen">
      <ProductsSearch />
      <div className="w-full flex items-center justify-center mt-4">
        <div className="flex items-center gap-2">
          {category?.slice(0, 5)?.map((category) => (
            <div
              key={category.id}
              className="py-2 px-4 w-fit border-[3px] border-secondary rounded hover:border-primary hover:text-primary cursor-pointer font-semibold text-secondary"
            >
              {category.category}
            </div>
          ))}

          {/*<div>*/}

          <div className="drawer drawer-end w-fit">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button">
                <CiMenuKebab className="text-secondary text-3xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className='min-h-full w-1/2 bg-white' >
                <h1 className='text-4xl font-semibold text-center py-8' > Categories</h1>
                <div className=" p-4 min-h-full bg-white text-base-content">
                  {category?.map((category) => (
                    <div
                      key={category.id}
                      className="py-2 px-4 w-fit m-2 h-fit border-[3px] border-secondary rounded inline-flex hover:border-primary hover:text-primary cursor-pointer font-semibold text-secondary"
                    >
                      {category.category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/*</div>*/}
        </div>
      </div>
      Products
    </div>
  );
};

export default Products;
