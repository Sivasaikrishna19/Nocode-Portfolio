"use client";
import { CaretRightOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Collapse, CollapseProps, theme } from "antd";
import axios from "axios";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import { CSSProperties } from "react";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "About",
    children: <About />,
    style: panelStyle,
  },
  {
    key: "2",
    label: "Education",
    children: <Education />,
    style: panelStyle,
  },
  {
    key: "3",
    label: "Experience",
    children: <Experience />,
    style: panelStyle,
  },
];

export default function Home() {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const postData = () => {
    axios
      .post("http://localhost:5050/profile/create", {
        userName: "Siva",
        role: "Software Developer",
        email: "sivasaikrishna.ms@gmail.com",
        phone: "4082104147",
        linkedInUrl: "https://www.linkedin.com/in/nssk/",
      })
      .then((res) => {
        console.log("Success!");
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center p-4">
        <EditOutlined className="text-[28px]" />
        <span className="font-semibold ml-2 text-[32px]">
          Complete Your Profile!
        </span>
      </div>
      <Collapse
        bordered={false}
        defaultActiveKey={["1", "2", "3"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
      />
    </div>
  );
}
