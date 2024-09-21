export type LatestMessagingUser = {
  id: number;
  email: string;
  fullName: string;
  latestMessage: string;
};

export type ChatMessage = {
  senderId: string;
  receivedUserId?: string;
  receivedGroupId?: string;
  messageBody: string;
};

export const dummyUser: LatestMessagingUser[] = [
  {
    id: 1,
    email: "letho@example.com",
    fullName: "Lê Thọ",
    latestMessage: "Hey, how are you?",
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    fullName: "Jane Smith",
    latestMessage: "Can we talk later?",
  },
  {
    id: 3,
    email: "emily.johnson@example.com",
    fullName: "Emily Johnson",
    latestMessage: "I will send the files.",
  },
];
