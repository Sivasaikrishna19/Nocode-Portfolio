"use client";
import { Input } from "antd";
import React, { useEffect, useState } from "react";

const { TextArea } = Input;

const Page = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  return (
    <div
      className={`w-full flex ${
        shouldAnimate
          ? "page-enter page-enter-active"
          : "page-exit page-exit-active"
      }`}
    >
      <div className=" w-[70%] m-auto flex">
        <div className="w-[50%]">
          <div className="font-semibold text-[42px] mb-4">Contact</div>
          <div className="font-light mb-12">
            Looking forward to hearing from you
          </div>
          <div className="mb-4">
            <div className="font-semibld text-[24px] mb-2">Phone</div>
            <div className="font-light">(+1)408 210 4147</div>
          </div>
          <div className="mb-4">
            {" "}
            <div className="font-semibld text-[24px] mb-2">Email</div>
            <div className="font-light">sivasaikrishna.nekkalapu@sjsu.edu</div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="w-full flex mb-8">
            <div className="w-full">
              <div className="mb-2">First Name</div>
              <Input className="w-full" />
            </div>
            <div className="ml-2 w-full">
              <div className="mb-2">Last Name</div>
              <Input className="w-full" />
            </div>
          </div>
          <div className="w-full flex mb-8">
            <div className="w-full">
              <div className="mb-2">Email</div>
              <Input className="w-full" />
            </div>
            <div className="ml-2 w-full">
              <div className="mb-2">Subject</div>
              <Input className="w-full" />
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-[70%]">
              <div className="mb-2">Message</div>
              <TextArea />
            </div>
            <div className="ml-8 w-[30%] ">
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-blue-300 rounded-full border-[1px] border-black border-solid cursor-pointer hover:shadow-lg transition ease-in-out delay-150 hover:bg-indigo-500 hover:text-white duration-500">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
