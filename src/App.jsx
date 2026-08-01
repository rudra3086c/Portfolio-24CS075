import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite"
  ];

  return (
    <div>
      <Header
        name="Rudra Patel"
        themeColor="#2563eb"
      />

      <NavBar activeSection="Home" />

      <About bio="I am a Computer Science student passionate about Web Development, AI, and Machine Learning." />

      <Skills skillList={skills} />

      <Footer email="24cs075@charusat.edu.in" />
    </div>
  );
}

export default App;