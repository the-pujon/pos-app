import React from "react";
import Image from "next/image";
import {useAppDispatch, useAppSelector} from "@/libs/hooks";
import {addItemToCart} from "@/libs/features/cart/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useAppDispatch()

  //adding in cart
  const handleCart = ((p)=>{
    const cart = {
      ...p,
      quantity:1,
      total: p.price

    }
    dispatch(addItemToCart(cart))
  })

  return (
    <div onClick={()=>handleCart(product)} className='flex flex-col divide-y-2 border-2 transition-all duration-500
    text-secondary hover:border-primary hover:text-primary hover:scale-105 items-center cursor-pointer' >
      <div>
        <Image
          src={product.image}
          width={300}
          height={500}
          alt={"product image"}
          className="w-32 h-36"
        />
        <p className='text-center  font-semibold py-1'>{product.price}</p>
      </div>
      <div className='border-t-2 w-full py-1' >
        <h2 className='text-center  font-semibold text-sm'>{product.name}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
