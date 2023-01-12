import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Comoponents/Home";
import { ChatPage } from "./Comoponents/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chatapp" element={<ChatPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
