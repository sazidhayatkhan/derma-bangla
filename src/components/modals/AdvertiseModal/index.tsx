"use client";
import React, { useEffect } from "react";
import styles from "./advertisemodal.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineCloseSquare } from "react-icons/ai";
import useModalStore from "@/stores/useModalStore";
const Modal: React.FC = () => {
  const { isModalOpen, closeModal, openModal }: any = useModalStore();
  const router = useRouter();
  useEffect(() => {
    // Open the drawer 3 seconds after the component mounts
    const timer = setTimeout(() => {
      openModal();
    }, 3000);

    return () => {
      clearTimeout(timer); // Cleanup the timer if the component unmounts
    };
  }, [openModal]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);
  const handleShop = () => {
    router.push("/offers");
    closeModal();
  };
  return (
    <>
      {isModalOpen && (
        <div className={styles.backdrop} onClick={closeModal}></div>
      )}
      <div className={`${styles.modal} ${isModalOpen ? styles.open : ""}`}>
        <div className={styles.modalContent}>
          <div className="w-[370px] md:w-full grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="flex md:hidden justify-end mb-4 col-span-12">
              <button onClick={closeModal}>
                <AiOutlineCloseSquare className="text-3xl" />
              </button>
            </div>
            <div className="col-span-12 md:col-span-1 mb-3 md:mb-0">
              <div className="block md:hidden w-full max-w-full">
                <Image
                  src="/images/puja_add.png"
                  alt="home2"
                  width={1280}
                  height={341}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                />
              </div>
              <div className="hidden md:block w-full max-w-full">
                <Image
                  // src="/images/puja_add2.png"
                  src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/462600682_122134876130345652_6174171319688605684_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=39BGhvAYIYAQ7kNvgEg5Iq9&_nc_ht=scontent.fdac14-1.fna&_nc_gid=A1OU-45Bu6yQlxGLDI_KAVH&oh=00_AYA92fNoRTgPUMqo-VYBNo1LD5r_LUGhIn7odUUADkPpFQ&oe=670DCDA1"
                  alt="home2"
                  width={1280}
                  height={341}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-2 relative">
              <div className="hidden md:flex justify-end mb-4">
                <button onClick={closeModal}>
                  <AiOutlineCloseSquare className="text-3xl" />
                </button>
              </div>
              <p className="text-4xl md:text-5xl text-center __chewy text-black">
                Get Discount
              </p>
              <div className="w-[95%] mx-auto mt-2">
                <p className="text-gray-500">🕉️ Festive Puja Sale! Blessings and Big Savings Await! 🕉️</p>
                <p className="text-gray-500">
                  Celebrate this Puja with Unbelievable Discounts! Get ready for
                  a 15% off on all your favorite products!
                </p>
                <p className="text-gray-500">
                  💥 Limited-Time Deals: From 9th October to 16th October, grab
                  exclusive deals and make your Puja celebrations even more
                  special.
                </p>
                <p className="text-gray-500">
                  📢 Hurry, the Offer is Valid for a Limited Time Only! Don’t
                  miss out on these divine savings!
                </p>
                <p className="text-gray-500">🌼 Wishing You a Prosperous and Joyous Puja!</p>
              </div>
              <div className="w-[70%] mx-auto mt-5">
                <button
                  onClick={handleShop}
                  className="w-full text-center bg-primary py-2 text-black border border-black mb-2 hover:bg-black hover:text-white transition duration-500"
                >
                  {" "}
                  CONTINUE
                </button>
                <button
                  onClick={closeModal}
                  className="w-full text-center bg-white py-2 text-black border border-black"
                >
                  NO, THANK YOU
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
