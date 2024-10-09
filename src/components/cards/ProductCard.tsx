import React from 'react'
import Image from 'next/image'
import { FaRegStar } from 'react-icons/fa'
import Link from 'next/link'
type Props = {
    prodData?:any
}

const ProductCard = ({prodData}: Props) => {
  return (
    <div>
        <Link href={`/product/${prodData?.slug}` || ""}>
            <div>
                <div className="w-full max-w-full mt-8 border rounded-lg overflow-hidden">
                    <Image
                    priority
                    src={prodData?.img ? prodData?.img : "/images/dflt.png"}
                    alt="home2"
                    width={400}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                </div>
                <div className='mt-3'>
                    <div className='text-yellow-500 flex justify-start mb-1'>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                    </div>
                    <p className='__chewy text-xl'>{prodData?.title}</p>
                    <p>{prodData?.price}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard