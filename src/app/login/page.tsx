"use client";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import RegisterModal from "./components/RegisterModal";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const onFinish = (value: any) => {
    console.log(value);
  };

  return (
    <div className="flex justify-center align-middle items-center min-h-screen bg-white">
      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        setIsOpen={setIsRegisterModalOpen}
      />

      {/* Main Login Form */}
      <Form name="login" onFinish={onFinish}>
        <div className="flex justify-center items-center font-extrabold text-[20px] mb-4">
          Messaging
        </div>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Mật khẩu"
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item>
          <Button
            className="w-full"
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            Đăng nhập
          </Button>
          <Button
            className="w-full mt-3"
            type="default"
            onClick={() => setIsRegisterModalOpen(true)}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
