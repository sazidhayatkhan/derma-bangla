import DrawerUI from "@/components/drawer";
import React from "react";
import HeroSection from "./components/heroSection";
import SectionTwo from "./components/sectionTwo";
import SectionThree from "./components/sectionThree";
import SectionFour from "./components/sectionFour";
import AdvertiseBanner from "./components/AdvertiseBanner";
import Modal from "@/components/modals/AdvertiseModal";

type Props = {};

const HomePageUI: React.FC = (props: Props) => {
  return (
    <>
      <Modal />
      <div className="">
        <HeroSection />
        <br />
        <div className="_container py-0 md:py-12">
          <AdvertiseBanner />
        </div>
        <br />
        <SectionTwo />
        <br />
        <SectionThree />
        <br />
        <SectionFour />
        <br />
      </div>
    </>
  );
};

export default HomePageUI;
