"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const BASE_URL = "https://3d94bf35-a344-44db-9971-ae31be2d1a86.mock.pstmn.io";
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [about, setAbout] = useState<any>();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  const getAbout = () => {
    axios
      .get(BASE_URL + "/about")
      .then((res) => {
        console.log(res.data, "about");
        setAbout(res.data);
        setShouldAnimate(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAbout();
  }, []);
  return (
    <div
      className={`w-full ${
        shouldAnimate
          ? "page-enter page-enter-active"
          : "page-exit page-exit-active"
      }`}
    >
      <div className="w-[80%] m-auto  flex h-[85vh]">
        <div className="w-[50%]  flex">
          <Image
            alt="Avatar Image"
            src={"/ReadyPlayerMe-Avatar.png"}
            width={550}
            height={550}
            loading={"lazy"}
            className="rounded-full"
          />
        </div>

        <div className="w-[50%] flex">
          <div className="m-auto container">
            <div className="text-[80px] mb-6 typed font-thin">Hello!</div>
            <div className="text-[24px] mb-3 font-semibold">A Bit About Me</div>
            <div
              className="font-light mb-8"
              dangerouslySetInnerHTML={{ __html: about?.about }}
            >
              {/* {about?.about} */}
            </div>
            <div className="resume-b flex items-center w-full justify-evenly">
              <div
                className="font-semibold rounded-full border-[1px] border-black border-solid w-[120px] h-[120px] flex items-center justify-center bg-[#b5651d] text-white cursor-pointer hover:shadow-lg transition ease-in-out delay-150 hover:bg-indigo-500 duration-500"
                onClick={() => {
                  handleNavigation("/Resume");
                }}
              >
                Resume
              </div>
              <div
                className="projects-b font-semibold rounded-full border-[1px] border-black border-solid w-[120px] h-[120px] flex items-center justify-center bg-[#FF3B24] text-white cursor-pointer hover:shadow-lg transition ease-in-out delay-150 hover:bg-pink-500 duration-500"
                onClick={() => {
                  handleNavigation("/Projects");
                }}
              >
                Projects
              </div>
              <div
                className="contact-b font-semibold rounded-full border-[1px] border-black border-solid w-[120px] h-[120px] flex items-center justify-center bg-[#80D8DA] text-white cursor-pointer hover:shadow-lg transition ease-in-out delay-150 hover:bg-green-500 duration-500"
                onClick={() => {
                  handleNavigation("/Contact");
                }}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
