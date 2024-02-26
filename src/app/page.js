import Cart from "@/components/Cart/Cart";
import Products from "@/components/Prodcuts/Products";
import Image from "next/image";

export default function Home() {
  return (
  <div className='grid grid-cols-2 h-screen divide-x divide-black container mx-auto'>
   <div><Cart/></div>
   <div><Products/></div>
  </div>
  );
}
