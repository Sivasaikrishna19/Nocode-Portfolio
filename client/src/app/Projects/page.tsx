"use client";

import { Divider } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

const Page = () => {
  const BASE_URL = "https://3d94bf35-a344-44db-9971-ae31be2d1a86.mock.pstmn.io";
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [projects, setProjects] = useState<any>();

  useEffect(() => {
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  const getProjects = () => {
    axios
      .get(BASE_URL + "/projects")
      .then((res) => {
        console.log(res.data, "projects");
        setProjects(res.data);
        setShouldAnimate(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      <div
        className={`w-full${
          shouldAnimate
            ? "page-enter page-enter-active"
            : "page-exit page-exit-active"
        }`}
      >
        <div className="font-semibold text-[42px] w-[70%] m-auto mb-8">
          Projects
        </div>
        {projects?.map((project: any, index: number) => {
          return (
            <div className="w-full my-8" key={index}>
              <div className="flex w-[70%] m-auto">
                <div className="w-[60%] pr-6">
                  <div className="font-medium text-[28px] my-4">
                    {project?.name}
                  </div>
                  <div>{project?.desc}</div>
                </div>
                <div className="w-[40%]">
                  {<img src={project?.img} className="w-3/4 h-auto" />}
                </div>
              </div>
              {index !== projects.length - 1 && (
                <div className="my-8 px-6">
                  <Divider plain className="divider "></Divider>
                </div>
              )}
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default Page;
