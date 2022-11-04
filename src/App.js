import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Attention from "./components/Attention";

function App() {
  return (
    <div className="h-screen font-cubano bg-cyan-300">
      <Attention />
      <Header />
      <main className="px-4 pt-20 bg-cyan-300">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl text-gray-600">
            Welcome to my portfolio!
          </span>
          <div className="flex flex-col items-center justify-center">
            <h1 className="tracking-tighter text-center pt-14 text-7xl">
              Mikko Jokipuu
            </h1>
            <p className="pt-6 text-3xl leading-8 text-center text-gray-600">
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
            <button className="w-full p-3 border-2 border-black rounded-lg">
              Projects
            </button>
          </div>
        </div>
      </main>
      <About />
      <Projects />
      <footer className="px-4 pt-20 bg-cyan-300">
        <p className="text-center text-gray-600">&copy; - Mikko Jokipuu</p>
      </footer>
    </div>
  );
}

export default App;
