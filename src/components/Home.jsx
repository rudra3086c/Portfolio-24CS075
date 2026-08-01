import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";

function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
  ];

  return (
    <>
      <Header
        name="Rudra Patel"
        themeColor="#2563eb"
      />

      <About bio="I am a Computer Science student passionate about Web Development, AI, and Machine Learning." />

      <Skills skillList={skills} />

      <Footer email="24cs075@charusat.edu.in" />
    </>
  );
}

export default Home;