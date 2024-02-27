"use client";

import { useAppSelector } from "@/libs/hooks";
import React from "react";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="mx-4">
      menu customer
      <div>
        {/* cart */}
        <div>
          {cart?.products?.map((product) => (
            <div key={product.id} className="flex gap-2 items-center">
              <div className="text-secondary font-semibold text-xl justify-center items-center w-full grid grid-cols-5 border p-2">
                <div className="col-span-2">{product?.name}</div>
                <div className="text-start">$ {product?.price}</div>
                <div className="col-span-1 flex gap-4 items-center justify-center">
                  <FaPlusCircle />
                  <span>{product?.quantity}</span>
                  <FaMinusCircle />
                </div>
                <div className="text-end">{product?.total}</div>
              </div>
              <div>
                <FaTrash className="text-red-500" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex-1 flex divide-y-2 flex-col mt-8">
            <div className="flex w-full justify-between p-2 border-t-2">
              <span>Subtotal</span>
              <span>12345</span>
            </div>
            <div className="flex w-full justify-between p-2">
              <span>Subtotal</span>
              <span>12345</span>
            </div>
            <div className="flex w-full justify-between p-2">
              <span>Subtotal</span>
              <span>12345</span>
            </div>
            <div className="flex w-full justify-between p-2">
              <span>Subtotal</span>
              <span>12345</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
