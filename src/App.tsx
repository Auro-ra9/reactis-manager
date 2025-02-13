import "./App.css";
import Home from "./pages/Home";
import { ItemProvider } from "./context/ItemContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-white transition-all">
      <ItemProvider>
        <Toaster/>
        <Home />
      </ItemProvider>
    </div>
  );
}

export default App;
