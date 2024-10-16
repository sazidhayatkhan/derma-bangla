import ProductCard from "@/components/cards/ProductCard";
import React from "react";

type Props = {};

const SectionThree = (props: Props) => {
  return (
    <div className="_container py-0 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-5">
        <div className="col-span-12 md:col-span-2">
        <div className="hidden md:block h-[1px] bg-black mt-5" />
        <p className="font-bold uppercase mt-7 text-center md:text-start">It's about the experience</p>
        </div>
        <div className="col-span-12 md:col-span-7">
        <p className="__greatVibes text-3xl md:text-5xl text-primary text-center md:text-start">
        Most Popular
          </p>
          <p className="mt-2 md:mt-0 __chewy text-black text-5xl md:text-8xl leading-[3rem] md:leading-[7rem] mb-3 md:mb-6 text-center md:text-start">
          Featured Products
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {
            prodData?.map((item:any,i:any)=>(
                <ProductCard key={i} prodData={item}/>
            ))
        }
      </div>
    </div>
  );
};

export default SectionThree;

const prodData = [
    {
        img:'/images/prod_images/8.png',
        title:"Aloe Tar Shampoo",
        slug:"aloe-tar-shampoo",
        category:"shampoo",
        price:"500 BDT",
        offerPrice:"400 BDT"
    },
    {
        img:'/images/prod_images/6.png',
        title:"Derma Moitz Soap",
        slug:"derma-moitz-soap",
        category:"soap",
        price:"500 BDT",
        offerPrice:"400 BDT"
    },
    {
        img:'/images/prod_images/3.png',
        title:"Derma Tar Soap",
        slug:"derma-tar-soap",
        category:"soap",
        price:"500 BDT",
        offerPrice:"400 BDT"
    },
    {
        img:'/images/prod_images/2.png',
        title:"CD. Powder",
        slug:"cd-powder",
        category:"powder",
        price:"500 BDT",
        offerPrice:"400 BDT"
    },
]
