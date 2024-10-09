'use client'
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

type Props = {
  buttonContent?: any;
};

const DrawerUI = ({ buttonContent }: Props) => {
  const router = useRouter(); // Initialize useRouter for navigation

  const handleNavigation = (url: string) => {
    // Close the drawer by unchecking the checkbox
    (document.getElementById("my-drawer") as HTMLInputElement).checked = false;

    // Navigate to the clicked item's URL
    router.push(url);
  };

  return (
    <div className="drawer z-[21]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn drawer-button">
          {buttonContent}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {menuData?.map((item: any, i: any) => (
            <li key={i}>
              <a
                href="#"
                onClick={() => handleNavigation(item.url)} // Navigate to the URL and close drawer
              >
                {item?.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrawerUI;

const menuData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Shop",
    url: "/shop",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
