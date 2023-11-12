"use client";
import { CaretRightOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Collapse, CollapseProps, Form, theme } from "antd";
import axios from "axios";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import { CSSProperties } from "react";
import useForm from "antd/es/form/hooks/useForm";

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
  const [form] = Form.useForm();

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
      <Form
        form={form}
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
        layout="vertical"
      >
        <Collapse
          bordered={false}
          defaultActiveKey={["1", "2", "3"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{ background: token.colorBgContainer }}
          items={getItems(panelStyle)}
        />
        <div className="flex justify-end items-center">
          <Button
            type="primary"
            onClick={() => {
              console.log(form.getFieldsValue());
            }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
