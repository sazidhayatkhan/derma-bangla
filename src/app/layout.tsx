import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBarUI from "@/view/appBars/Navbar";
import FooterUI from "@/view/appBars/Footer";
import { ProdDataProvider } from "@/context/ProdDataContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Derma Bangla",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <ProdDataProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <NavBarUI/>
            <div className="">
              {children}
            </div>
            <FooterUI/>
          </body>
       </ProdDataProvider>
    </html>
  );
}
