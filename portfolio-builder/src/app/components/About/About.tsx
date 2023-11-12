import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const About = () => {
  return (
    <div>
      {" "}
      <div className="w-full flex justify-center">
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: "Please input your username!" }]}
          className=" w-full"
          style={{
            marginRight: "8px",
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="pl-2 w-full"
        >
          <Input />
        </Form.Item>
      </div>
      <div className="w-full flex justify-center">
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please input your role!" }]}
          className=" w-full"
          style={{
            marginRight: "8px",
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="pl-2 w-full"
        >
          <Input />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="LinkedIn Profile"
          name="linkedInUrl"
          rules={[{ required: true, message: "Please input your role!" }]}
          className=" w-full"
          style={{
            marginRight: "8px",
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="About"
          name="about"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="pl-2 w-full"
        >
          <TextArea />
        </Form.Item>
      </div>
    </div>
  );
};

export default About;
