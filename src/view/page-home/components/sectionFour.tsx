import React from 'react'

type Props = {}

const SectionFour = (props: Props) => {
  return (
    <div className='_container'>
        <div className="bg-gradient-to-r from-violet-500 to-green-300 min-h-screen w-full flex justify-center items-center">
      <div className="">
        <p className="__greatVibes text-center text-white text-5xl mb-1">
          Experience the Magic of Christmas
        </p>
        <p className="__chewy text-white text-8xl w-[67%] text-center mx-auto mb-6">Explore Our Festive Wonderland of Holiday Delights</p>
        <p className="__chewy text-white text-2xl text-center mt-3 w-[50%] mx-auto">From enchanting ornaments to cozy holiday apparel, we've curated a collection that will make your home merry and bright</p>
        <div className="flex justify-center items-center mt-4">
          <button className="bg-white text-black rounded-full font-bold text-base px-6 py-2">SHOP NOW</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SectionFour