import ProductCard from "@/components/cards/ProductCard";
import React from "react";

type Props = {};

const ShopUI = (props: Props) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-green-300">
        <p className="text-white __chewy text-center text-6xl md:text-8xl py-4 md:py-16">SHOP</p>
      </div>
      <div className="_container pt-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {prodData?.map((item: any, i: any) => (
            <ProductCard key={i} prodData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopUI;
const prodData = [
  {
    img: "/images/prod_images/8.png",
    title: "Aloe Tar Shampoo",
    slug: "aloe-tar-shampoo",
    category: "shampoo",
    price: "500 BDT",
    offerPrice: "400 BDT",
  },
  {
    img: "/images/prod_images/6.png",
    title: "Derma Moitz Soap",
    slug: "derma-moitz-soap",
    category: "soap",
    price: "500 BDT",
    offerPrice: "400 BDT",
  },
  {
    img: "/images/prod_images/3.png",
    title: "Derma Tar Soap",
    slug: "derma-tar-soap",
    category: "soap",
    price: "500 BDT",
    offerPrice: "400 BDT",
  },
  {
    img: "/images/prod_images/2.png",
    title: "CD. Powder",
    slug: "cd-powder",
    category: "powder",
    price: "500 BDT",
    offerPrice: "400 BDT",
  },
  {
    img: "/images/prod_images/4.png",
    title: "Derma Shed Soap",
    slug: "derma-shed-soap",
    category: "soap",
    price: "500 BDT",
    offerPrice: "400 BDT",
  },
  {
    img: "/images/prod_images/1.png",
    title: "Derma Radiant",
    slug: "derma-radiant",
    category: "facewash",
    price: "500 BDT",
    offerPrice: "400 BDT",
  },
  {
    img: "/images/prod_images/5.png",
    title: "Sebo Plus Shampoo",
    slug: "sebo-plus-shampoo",
    category: "shampoo",
    price: "500 BDT",
    offerPrice: "400 BDT",
  },
  {
    img: "/images/prod_images/7.png",
    title: "Derma Acne Soap",
    slug: "derma-acne-soap",
    category: "soap",
    price: "500 BDT",
    offerPrice: "400 BDT",
  },
];
