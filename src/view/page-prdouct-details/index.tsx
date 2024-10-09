import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
type Props = {};

const ProductDetailsUI = (props: Props) => {
  return (
    <div className="_container py-4 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-7">
        <div className="col-span-12 md:col-span-2 ">
          <p className="block md:hidden mb-4 text-sm font-semibold text-gray-400">
            Home / Pet & People Costumes / Christmas Holiday Hound
          </p>
          <div className="w-full max-w-full border rounded-lg overflow-hidden">
            <Image
              priority
              src={"/images/dflt.png"}
              alt="home2"
              width={900}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 mt-2 md:mt-4">
          <p className="hidden md:block text-sm font-semibold text-gray-400">
            Home / Pet & People Costumes / Christmas Holiday Hound
          </p>
          <div>
            <p className="text-base font-semibold text-primary py-3">
              Pet & People Costumes
            </p>
            <p className="__chewy text-5xl">Christmas Holiday Hound</p>
            <p className="py-3 text-primary font-bold text-3xl">$65.00</p>
            <p>
              From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our
              carefully curated ensembles bring joy to every member of the
              family—both two-legged and four-legged. Elevate your family photos
              with coordinated outfits that capture the spirit of the season.
              Unleash the fun with North Pole Pals and transform your pets into
              winter wonderland characters.
            </p>
          </div>
          <div className="pt-7 flex justify-end">
            <button className="bg-primary/90 hover:bg-primary rounded-full py-2 px-5 font-bold text-white">
              ADD TO CART
            </button>
          </div>
          <div className="mt-6 border-t-[1px]">
            <p className="text-xl font-semibold text-gray-500 py-2">
              Free shipping on orders over $50!
            </p>
            <div>
              <p className="text-gray-500 font-medium flex justify-start items-center gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                No-Risk Money Back Guarantee!
              </p>
              <p className="text-gray-500 font-medium flex justify-start items-center gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                No Hassle Refunds
              </p>
              <p className="text-gray-500 font-medium flex justify-start items-center gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                Secure Payments
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 text-center">
          <p className="bg-black text-white rounded-full px-4 py-2 inline-block">
            Recommended for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsUI;
