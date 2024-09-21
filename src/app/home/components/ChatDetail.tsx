"use client";

import { useEffect } from "react";
import ChatDetailHeader from "./ChatDetailHeader";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { ChatMessage } from "../types";

const testMessage: ChatMessage = {
  senderId: "1",
  receivedUserId: "1",
  messageBody: "test-message",
};

export default function ChatDetail() {
  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame) => {
      console.log("Connected: " + frame);
      stompClient.subscribe("/user/1/queue/messages", (message) => {
        if (message.body) {
          const receivedMessage = message.body;
          console.log("Received message: ", receivedMessage);
        }
      });
    });

    setTimeout(() => {
      stompClient.send("/app/private-message", {}, JSON.stringify(testMessage));
    }, 1000);
  }, []);

  return (
    <div className="w-2/3 rounded-lg bg-white my-4 mr-4">
      <ChatDetailHeader />
    </div>
  );
}
