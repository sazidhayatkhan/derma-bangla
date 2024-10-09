'use client'
import React from "react";
import ProductCard from "@/components/cards/ProductCard";
import { useProdData } from "@/context/ProdDataContext";

type Props = {};

const ShopUI = (props: Props) => {
  const prodData = useProdData();
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-green-300">
        <p className="text-white __chewy text-center text-6xl md:text-8xl py-4 md:py-16">
          SHOP
        </p>
      </div>
      <div className="_container pt-3 md:pt-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {prodData?.map((item: any, i: any) => (
            <ProductCard key={i} prodData={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopUI;
