import ProductDetailsUI from '@/view/page-prdouct-details'
import React from 'react'

type Props = {}

const page = ({params}:{params:{slug:string}}) => {
  return (
    // <div>page {params.slug}</div>
    <ProductDetailsUI/>
  )
}

export default page