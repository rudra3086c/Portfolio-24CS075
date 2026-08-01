import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div style={{
    backgroundColor: darkMode ? "#222" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
  }}>
      <NavBar />
        <div style={{ textAlign: "center", margin: "20px" }}>
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    
  );
}

export default App;