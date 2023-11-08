"use client";
import { Divider } from "antd";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="bg-[#F3F3F3] py-6 px-12 flex justify-between pr-24">
      <div className="flex items-center">
        <div className="rounded-[999px] text-[#b5651d] bg-[#b5651d] w-fit px-[7px] py-[2px]">
          {" "}
          0{" "}
        </div>
        <div className="ml-2 flex items-center cursor-pointer">
          <span onClick={() => handleNavigation("/")}>
            Siva Sai Krishna Nekkalapu
          </span>{" "}
          <span className="text-gray-400 mx-2">/</span>{" "}
          <span className="font-sm text-gray-400">Full Stack Developer</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span
          className={`cursor-pointer hover:text-[#b5651d] ${
            pathName === "/Resume"
              ? "transition ease-in-out delay-500 text-[#b5651d] "
              : ""
          }`}
          onClick={() => handleNavigation("/Resume")}
        >
          Resume
        </span>
        <Divider type="vertical" />
        <div
          className={`cursor-pointer hover:text-[#b5651d] ${
            pathName === "/Projects" ? "text-[#b5651d]" : ""
          }`}
          onClick={() => handleNavigation("/Projects")}
        >
          Projects
        </div>
        <Divider type="vertical" />
        <span
          className={`cursor-pointer hover:text-[#b5651d] ${
            pathName === "/Contact" ? "text-[#b5651d]" : ""
          }`}
          onClick={() => handleNavigation("/Contact")}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default Header;
