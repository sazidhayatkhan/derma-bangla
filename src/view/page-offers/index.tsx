'use client'
import React from 'react'
import AdvertiseBanner from '../page-home/components/AdvertiseBanner'
import { useProdData } from '@/context/ProdDataContext';
import ProductCard from '@/components/cards/ProductCard';

type Props = {}

const OffersPageUI = (props: Props) => {
  const prodData = useProdData();
  return (
    <>
        <AdvertiseBanner/>
        <div className="_container pt-6 md:pt-10 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {prodData?.map((item: any, i: any) => (
            <ProductCard key={i} prodData={item} offer/>
          ))}
        </div>
      </div>
    </>
  )
}

export default OffersPageUI