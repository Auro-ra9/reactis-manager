import "./App.css";
import Home from "./pages/Home";
import { ItemProvider } from "./context/ItemContext";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } transition-all`}
    >
      <ItemProvider>
        <Toaster />
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Home />
      </ItemProvider>
    </div>
  );
}

export default App;
