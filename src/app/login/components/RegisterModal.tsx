"use client";

import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Radio } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import "../style.css";

type RegisterModalType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function RegisterModal({
  isOpen,
  setIsOpen,
}: RegisterModalType) {
  const [loading, setLoading] = useState<boolean>(false);
  const onFinish = (value: any) => {
    console.log(value);

    // Handle convert birthday to Date by dayjs ...
  };

  return (
    <Modal
      width={600}
      title="Đăng ký"
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
      maskClosable={false}
    >
      <Form className="mt-4" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "" }]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Mật khẩu"
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="reTypedPassword"
          rules={[{ required: true, message: "" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Nhập lại mật khẩu"
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item
          label="Họ và tên"
          name="fullName"
          rules={[{ required: true, message: "" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Họ và tên"
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item label="Giới tính" name="gender" layout="horizontal">
          <Radio.Group>
            <Radio value="male">Nam</Radio>
            <Radio value="female">Nữ</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Ngày sinh" name="birthday" layout="horizontal">
          <DatePicker placeholder="Ngày sinh" />
        </Form.Item>
        <Form.Item>
          <Button
            className="w-full"
            size="large"
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
