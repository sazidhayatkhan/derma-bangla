import React from "react";
import Image from "next/image";
type Props = {};

const SectionTwo = (props: Props) => {
  return (
    <div className="_container py-12">
      <div className="grid grid-cols-9 gap-5">
        <div className="col-span-2">
          <div className="h-[1px] bg-black mt-5" />
          <p className="font-bold uppercase mt-7">About ChristmasGifts</p>
        </div>
        <div className="col-span-7">
          <p className="__greatVibes text-5xl text-primary">
            We understand the magic of Christmas
          </p>
          <p className="__chewy text-black text-8xl leading-[7rem] mb-6">
            We're passionate about spreading the joy and wonder of Christmas
          </p>
          <div>
            <p className="text-start ms-auto text-gray-500 w-[70%]">
              As a team of holiday enthusiasts, we’ve made it our mission to
              create a place where the spirit of Christmas comes to life all
              year round. ChristmasGifts is more than just a place to shop; it’s
              a destination where you can immerse yourself in the festive
              spirit. From enchanting ornaments and twinkling lights to cozy
              sweaters and thoughtful gifts, we handpick every product with love
              and care. We take pride in offering a wide range of high-quality
              items that capture the essence of the holiday season.
            </p>
          </div>
          <div className="w-full max-w-full mt-8">
            <Image
              priority
              src="/images/about01.jpg"
              alt="home2"
              width={1280}
              height={341}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
