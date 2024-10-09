import React from "react";
import { FaShoppingCart } from "react-icons/fa";

type Props = {};

const NavBarUI: React.FC = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-green-300 w-full flex justify-between items-center px-12 py-3">
      <div className="">
        <p>Derma Bangla</p>
      </div>
      <div className="flex items-center gap-14">
        {
          menuData?.map((item:any,i:any)=>(
            <div key={i}>
              <button className="uppercase text-white font-bold">{item?.title}</button>
            </div>
          ))
        }
      </div>
      <div className="">
        <button className="text-white font-bold text-xl"><FaShoppingCart/></button>
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
