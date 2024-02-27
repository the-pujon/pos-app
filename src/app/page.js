
import Orders from "@/components/Orders/Orders";
import Products from "@/components/Prodcuts/Products";
import Image from "next/image";

export default function Home() {
  return (
  <div className='grid grid-cols-1 lg:grid-cols-2 h-screen lg:divide-x divide-black container mx-auto'>
   <div><Orders/></div>
   <div className='-order-1 lg:order-2' ><Products/></div>
  </div>
  );
}
