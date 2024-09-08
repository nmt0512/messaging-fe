import ChatDetail from "./components/ChatDetail";
import ChatList from "./components/ChatList";

export default function Home() {
  return (
    <div className="flex gap-4 h-screen">
      <ChatList />
      <ChatDetail />
    </div>
  );
}
