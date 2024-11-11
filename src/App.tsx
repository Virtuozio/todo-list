import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import Post from "./Components/Post";
import Todoes from "./Components/Todoes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/todoes" element={<Todoes />} />
      </Routes>
    </Router>
  );
}

export default App;
