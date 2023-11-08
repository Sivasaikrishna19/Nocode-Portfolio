import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Divider } from "antd";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSSK Portfolio",
  description: "Created using create next and node",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F3F3F3] w-[100vw]">
        <div className={inter.className} style={{ margin: "-8px" }}>
          <Header />
          <div className="w-[100vw] bg-[#F3F3F3]">
            <div className=" m-auto pt-[100px]">{children}</div>
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
