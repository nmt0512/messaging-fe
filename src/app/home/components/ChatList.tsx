"use client";

import { useState } from "react";
import { dummyUser, LatestMessagingUser } from "../types";
import { List } from "antd";

export default function ChatList() {
  const [activeUser, setActiveUser] = useState<number>(dummyUser[0].id);
  const [loading, setLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<LatestMessagingUser[]>(dummyUser);

  return (
    <div className="w-1/3 rounded-lg bg-white my-4 ml-4">
      <p className="text-[26px] font-bold my-3 ml-4">Chat</p>

      <List
        dataSource={userList}
        split={false}
        renderItem={(user) => (
          <List.Item
            className={`m-1 border-none hover:bg-gray-100 cursor-pointer rounded-lg select-none ${
              activeUser === user.id && "bg-gray-100"
            }`}
            key={user.id}
            onClick={() => {
              setActiveUser(user.id);
            }}
          >
            <List.Item.Meta
              className="mx-3"
              title={user.fullName}
              description={user.latestMessage}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
