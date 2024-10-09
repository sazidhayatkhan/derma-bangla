import React from "react";
import Image from "next/image";
import Link from 'next/link'
type Props = {};

const AdvertiseBanner = (props: Props) => {
  return (
    <div className="_container py-0 md:py-12">
        <Link href="/shop">
            <div className="w-full max-w-full">
            <Image
                priority
                src="/images/puja_add.png"
                alt="home2"
                width={1280}
                height={341}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
            </div>
        </Link>
    </div>
  );
};

export default AdvertiseBanner;
