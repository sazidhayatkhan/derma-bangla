"use client";
import React, { createContext, useContext } from "react";
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

const ProdDataContext = createContext(prodData);

// Create a provider component
export const ProdDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ProdDataContext.Provider value={prodData}>
      {children}
    </ProdDataContext.Provider>
  );
};

// Custom hook to use the ProdDataContext
export const useProdData = () => {
  return useContext(ProdDataContext);
};
