import Header from "./components/navigation/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Attention from "./components/Attention";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Intro from "./components/Intro";
import Education from "./components/Education";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="font-rubik">
      <Attention />
      <Header />
      <Intro />
      <Education />
      {/*<About />
      <Projects />
      <footer className="px-4 pt-20 bg-cyan-300">
        <p className="text-center text-gray-600">2022 - Mikko Jokipuu</p>
  </footer> */}
    </div>
  );
}

export default App;
