import React from 'react'
import Image from 'next/image'
import { FaRegStar } from 'react-icons/fa'
import Link from 'next/link'
type Props = {
    prodData?:any
    offer?:boolean
}

const ProductCard = ({prodData,offer}: Props) => {
  return (
    <div>
        <Link href={`/product/${prodData?.slug}` || ""}>
            <div>
                <div className="w-full max-w-full border rounded-lg overflow-hidden relative">
                    <Image
                    priority
                    src={prodData?.img ? prodData?.img : "/images/dflt.png"}
                    alt="home2"
                    width={400}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    {
                        offer ?
                        <div className='bg-red-500 text-white text-[10px] md:text-sm font-bold absolute top-3 md:top-6 left-2 px-3 md:px-4 py-[5px] md:py-2 rounded-full'>
                            <p>15% OFF</p>
                        </div>
                        :
                        <></>
                    }
                </div>
                <div className='mt-3'>
                    <div className='text-yellow-500 flex justify-start mb-1'>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                    </div>
                    <p className='__chewy text-xl text-black'>{prodData?.title}</p>
                    <p>{prodData?.price}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard