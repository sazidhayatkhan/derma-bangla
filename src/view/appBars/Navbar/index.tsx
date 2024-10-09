import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link'
import { IoMenuSharp } from "react-icons/io5";
import DrawerUI from "@/components/drawer";
type Props = {};

const NavBarUI: React.FC = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-green-300 w-full flex justify-between items-center px-4 md:px-12 py-3">
      <div className="w-full">
        <Link href="/">
          <button className="__chewy text-white text-2xl md:text-4xl">Derma Bangla</button>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-14 w-full">
        {
          menuData?.map((item:any,i:any)=>(
            <div key={i}>
              <Link href={item?.url || ""}>
                <button className="uppercase text-white font-bold">{item?.title}</button>
              </Link>
            </div>
          ))
        }
        <Link href={"/offers"}>
                <button className="bg-red-600 uppercase text-white font-bold px-3 py-1">SALE</button>
        </Link>
      </div>
      <div className="hidden md:block w-full text-end">
        <button className="text-white font-bold text-xl"><FaShoppingCart/></button>
      </div>
      <div className="block md:hidden">
          <DrawerUI buttonContent={<IoMenuSharp className="text-xl"/>}/>
        </div>
    </div>
  );
};

export default NavBarUI;

const menuData = [
  {
    title:"Home",
    url:"/"
  },
  {
    title:"Shop",
    url:"/shop"
  },
  {
    title:"About",
    url:"/about"
  },
  {
    title:"Contact",
    url:"/contact"
  },
]
