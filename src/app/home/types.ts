export type LatestMessagingUser = {
  id: number;
  email: string;
  fullName: string;
  latestMessage: string;
};

export const dummyUser: LatestMessagingUser[] = [
  {
    id: 1,
    email: "hienhien@example.com",
    fullName: "Hiền Hiền",
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
