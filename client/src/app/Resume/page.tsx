"use client";

import { Divider, Progress } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { LinkOutlined } from "@ant-design/icons";
import Link from "next/link";

const Page = () => {
  const BASE_URL = "https://3d94bf35-a344-44db-9971-ae31be2d1a86.mock.pstmn.io";
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [resume, setResume] = useState<any>();

  useEffect(() => {
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  const getResume = () => {
    axios
      .get(BASE_URL + "/resume")
      .then((res) => {
        console.log(res.data, "resume");
        setResume(res.data);
        setShouldAnimate(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getResume();
  }, []);

  return (
    <div
      className={`w-full  ${
        shouldAnimate
          ? "page-enter page-enter-active"
          : "page-exit page-exit-active"
      }`}
    >
      <div className=" mb-8 w-[70%] m-auto flex items-center">
        <span className="text-[42px] font-sans font-semibold">Resume</span>{" "}
        <span className="ml-2 mt-3">
          <Link
            href="https://drive.google.com/file/d/1ipqAHP9C7jgAr_6r2H3LY6YvaAIMs8Uy/view?pli=1"
            target="_blank"
            className="text-blue-500"
          >
            <LinkOutlined className="text-[20px]" />
          </Link>
        </span>
      </div>
      <div className="flex  w-[70%] m-auto">
        <div className="w-[40%]">
          <div className="font-medium text-[28px] my-4">Work Experience</div>
        </div>
        <div className="w-[60%]">
          {resume?.work_experience?.map((item: any) => {
            return (
              <div className="flex flex-1 my-6">
                <div className="w-[30%] font-light">
                  {dayjs(item?.start_date).format("MMM, YYYY") +
                    " - " +
                    dayjs(item?.end_date).format("MMM, YYYY")}
                </div>
                <div className="w-[70%]">
                  <div className="font-semibold text-[18px] mb-3">
                    {item?.role}
                  </div>
                  <div className="font-light">{item?.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-4 px-6">
        <Divider plain className="divider "></Divider>
      </div>
      <div className="flex w-[70%] m-auto">
        <div className="w-[40%]">
          <div className="font-medium text-[28px] my-4">Education</div>
        </div>
        <div className="w-[60%]">
          {resume?.education?.map((item: any) => {
            return (
              <div className="flex flex-1 my-6">
                <div className="w-[30%] font-light">
                  {!item?.in_progress
                    ? dayjs(item?.start_date).format("MMM, YYYY") +
                      " - " +
                      dayjs(item?.end_date).format("MMM, YYYY")
                    : dayjs(item?.start_date).format("MMM, YYYY") +
                      " - " +
                      "Present"}
                </div>
                <div className="w-[70%]">
                  <div className="font-semibold text-[18px] mb-3">
                    {item?.college_name}
                  </div>
                  <div className="font-light mb-2">{item?.major}</div>
                  <div className="font-light">
                    <span>GPA</span> <span>{item?.gpa}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-4 px-6">
        <Divider plain className="divider"></Divider>
      </div>
      <div className="flex mb-12 w-[70%] m-auto">
        <div className="w-[40%]">
          <div className="font-medium text-[28px] my-4">Skills & Expertise</div>
        </div>
        <div className="w-[60%]">
          <div className="flex flex-1 my-6">
            <div className="w-[30%] font-light">
              {resume?.skills?.skills?.map((skill: string, index: number) => {
                return (
                  skill +
                  (resume?.skills?.skills.length - 1 === index ? "." : ", ")
                );
              })}
            </div>
            <div className="w-[70%]">
              {resume?.skills?.expertise.map((item: any) => {
                return (
                  <div>
                    <span>{item?.topic}</span>
                    <Progress
                      percent={item?.rating}
                      status="active"
                      size="small"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
