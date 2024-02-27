
import Orders from "@/components/Orders/Orders";
import Products from "@/components/Prodcuts/Products";
import Image from "next/image";

export default function Home() {
  return (
  <div className='grid grid-cols-2 h-screen divide-x divide-black container mx-auto'>
   <div><Orders/></div>
   <div><Products/></div>
  </div>
  );
}
