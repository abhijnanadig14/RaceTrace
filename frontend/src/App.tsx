import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen bg-[#0E0F11]">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        hello
      </div>
    </div>
  );
}

export default App;
