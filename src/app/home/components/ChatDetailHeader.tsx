"use client";

import { Avatar } from "antd";

export default function ChatDetailHeader() {
  return (
    <div
      className="flex border-b"
      style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="ml-2 my-1 p-2 flex items-center cursor-pointer hover:bg-gray-100 rounded select-none">
        <div className="flex-shrink-0 mr-2">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i4zPog-0j0JR_yZglxPhTPZXxN2iMTQ3Dw&s"
            size="large"
            alt="Avatar"
          />
        </div>
        <div>
          <p className="text-[14px]">Lê Thọ</p>
          <p className="text-[14px] text-gray-400">Hoạt động 2 giờ trước</p>
        </div>
      </div>
    </div>
  );
}
