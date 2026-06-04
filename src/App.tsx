import Header from "./components/Header";
import Hero from "./components/Hero";
import LiveChatButton from "./components/LiveChatButton";

function App() {
  return (
    <div className="min-h-screen bg-[#f4f3f0] text-black">
      <Header />
      <Hero />
      <LiveChatButton />
    </div>
  );
}

export default App;