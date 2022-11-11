import Header from "./components/Navigation/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Attention from "./components/Attention";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="h-screen font-cubano">
      <Attention />
      <Header />
      <main className="px-4 pt-20 bg-cyan-300">
        <div className="flex flex-col items-center justify-center">
          <span
            className="text-xl text-gray-600"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            Welcome to my portfolio!
          </span>
          <div className="flex flex-col items-center justify-center">
            <h1
              className="tracking-tighter text-center pt-14 text-7xl"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              Mikko Jokipuu
            </h1>
            <p
              className="pt-6 text-3xl leading-8 text-center text-gray-500"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              An ICT student <br />{" "}
              <span className="text-lg tracking-tight">at</span> <br />
              <span className="text-lg tracking-tight">
                Turku University of Applied Sciences
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full pt-10 gap-y-4">
            <button className="w-full p-3 border-2 border-black border-dashed rounded-lg">
              About
            </button>
            <button className="w-full p-3 border-2 border-black rounded-lg bg-cyan-200">
              Projects
            </button>
          </div>
        </div>
      </main>
      <About />
      <Projects />
      <footer className="px-4 pt-20 bg-cyan-300">
        <p className="text-center text-gray-600">2022 - Mikko Jokipuu</p>
      </footer>
    </div>
  );
}

export default App;
