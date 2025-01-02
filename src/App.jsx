import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Messages from "./Components/Messages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className="section">
          <Routes>
            <Route path="/profile" element={<Content />} />
            <Route path="/message/*" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
