import React from "react";
import Image from "next/image";
import Link from 'next/link';

type Props = {};

const AdvertiseBanner = (props: Props) => {
  return (
    <div className="w-full"> {/* Make sure the container takes up full width */}
      <Link href="/offers">
        <div className="w-full">
          <Image
            priority
            src="/images/puja_add.png"
            alt="home2"
            width={1920}
            height={500}  
            sizes="100vw"
            className="w-full h-auto object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default AdvertiseBanner;
