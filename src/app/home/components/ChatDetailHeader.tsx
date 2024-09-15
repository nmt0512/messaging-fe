"use client";

import { Avatar } from "antd";

export default function ChatDetailHeader() {
  return (
    <div
      className="p-3 flex border-b items-center"
      style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex-shrink-0 mr-2">
        <Avatar
          src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/414713398_122132562062077234_8287916163266493951_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEPVJwuEKG5m5k3hP_5eb9Rw1yq1ORWeETDXKrU5FZ4ROwOEiabG-nmERwum9COT0g1F5OOuV_g7AFSwvBpSUpC&_nc_ohc=bLSe99ENdigQ7kNvgES_08h&_nc_ht=scontent.fhan18-1.fna&_nc_gid=A-HDcH-N24RsWb9tm841PWP&oh=00_AYD9C5iOKoQ_5y3eqPCW6_NLEFGyCj8pxf3TdhXPXMlXgQ&oe=66EC5AA0"
          size="large"
          alt="Avatar"
        />
      </div>
      <div className="select-none">
        <p className="text-[14px]">Hiền Hiền</p>
        <p className="text-[14px] text-gray-400">Hoạt động 2 giờ trước</p>
      </div>
    </div>
  );
}
